"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Client"));
const Franchise_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Franchise"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const UpdateFranchiseValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateFranchiseValidator"));
class FranchiseController {
    async index({ request, inertia, auth }) {
        const user = await User_1.default.all();
        const page = request.input('page', 1);
        const franchises = await Franchise_1.default.query().preload('client').preload('user').paginate(page, 5);
        return inertia.render('Franchises', {
            franchises,
            user,
            auth,
        });
    }
    async showFranchise({ params, view }) {
        const franchise = await Franchise_1.default.query().where('id', params.id).firstOrFail();
        const client = await Client_1.default.all();
        const user = await User_1.default.query().where('role', 3);
        return view.render('home/showFranchise', {
            franchise,
            client,
            user,
        });
    }
    async updateFranchise({ params, request, response, session }) {
        const franchise = await Franchise_1.default.findOrFail(params.id);
        const data = await request.validate(UpdateFranchiseValidator_1.default);
        franchise
            .merge({ ...data, active: data.active || false,
            drink: data.drink || false,
            newsletter: data.newsletter || false,
            planning: data.planning || false, })
            .save();
        session.flash({ success: "La franchise a bien été sauvgardé " });
        return response.redirect().toRoute('home');
    }
    async createFranchise({ view }) {
        const franchise = new Franchise_1.default();
        const client = await Client_1.default.all();
        const user = await User_1.default.query().where('role', 3);
        return view.render('home/createFranchise', {
            franchise,
            client,
            user,
        });
    }
    async store({ params, request, response, session }) {
        const franchise = params.id ? await Franchise_1.default.findOrFail(params.id) : new Franchise_1.default();
        const data = await request.validate(UpdateFranchiseValidator_1.default);
        const client = await Client_1.default.findOrFail(data.clientId);
        await franchise
            .merge({
            ...data,
            active: data.active || false,
            drink: client.drink || false,
            newsletter: client.newsletter || false,
            planning: client.planning || false
        })
            .save();
        session.flash({ success: "La franchise a bien été crée" });
        return response.redirect().toRoute('home');
    }
    async deleteFranchise({ params, session, response }) {
        const franchise = await Franchise_1.default.findOrFail(params.id);
        await franchise.delete();
        session.flash({ success: "La franchise a bien été supprimé" });
        return response.redirect().toRoute('home');
    }
}
exports.default = FranchiseController;
//# sourceMappingURL=FranchiseController.js.map