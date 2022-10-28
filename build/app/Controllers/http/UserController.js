"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Client"));
const Franchise_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Franchise"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const UpdateUserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateUserValidator"));
class UsersController {
    async createUserFranchise({ view }) {
        const user = new User_1.default();
        const client = await Client_1.default.all();
        const franchise = await Franchise_1.default.all();
        return view.render('home/createUserFranchise', {
            franchise,
            client,
            user
        });
    }
    async updateUserMdp({ view }) {
        const user = await User_1.default.all();
        return view.render('home/UpdateUserMdp', {
            user
        });
    }
    async storeMdp({ request, session, response }) {
        const email = request.input('email');
        const name = request.input('name');
        const password = request.input('password');
        const user = await User_1.default.query().where('email', email).where('name', name).firstOrFail();
        const data = await request.validate(UpdateUserValidator_1.default);
        user
            .merge({ ...data, password: password })
            .save();
        session.flash({ success: "Le mot de passe a bien été changé" });
        return response.redirect().toRoute('/login');
    }
}
exports.default = UsersController;
//# sourceMappingURL=UserController.js.map