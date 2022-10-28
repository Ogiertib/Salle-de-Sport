"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Client"));
const Franchise_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Franchise"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const UpdateClientValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateClientValidator"));
class ClientController {
    async index({ inertia, request, auth }) {
        const user = await User_1.default.all();
        const page = request.input('page', 1);
        const clients = await Client_1.default.query().preload('user').paginate(page, 5);
        return inertia.render('Clients', {
            clients,
            user,
            auth
        });
    }
    async showClient({ params, view }) {
        const client = await Client_1.default.query().where('id', params.id).firstOrFail();
        const franchise = await Franchise_1.default.all();
        const user = await User_1.default.all();
        return view.render('home/showClient', {
            franchise,
            client,
            user
        });
    }
    async clientFranchise({ params, view }) {
        const client = await Client_1.default.query().where('id', params.id).firstOrFail();
        const user = await User_1.default.all();
        const franchise = await Franchise_1.default.query().where('clientId', params.id).preload('user');
        return view.render('home/clientFranchise', {
            franchise,
            client,
            user
        });
    }
    async updateClient({ params, request, response, session }) {
        const client = await Client_1.default.findOrFail(params.id);
        const data = await request.validate(UpdateClientValidator_1.default);
        client
            .merge({ ...data,
            drink: data.drink || false,
            newsletter: data.newsletter || false,
            planning: data.planning || false })
            .save();
        session.flash({ success: "Le client a bien été sauvgardé " });
        return response.redirect().toRoute('Clients');
    }
    async createClient({ view }) {
        const client = new Client_1.default();
        const user = await User_1.default.query().where('role', 2);
        return view.render('home/createClient', {
            client,
            user
        });
    }
    async store({ params, request, inertia, session }) {
        const client = params.id ? await Client_1.default.findOrFail(params.id) : new Client_1.default();
        const data = await request.validate(UpdateClientValidator_1.default);
        client
            .merge({ ...data,
            drink: data.drink || false,
            newsletter: data.newsletter || false,
            planning: data.planning || false })
            .save();
        session.flash({ success: "Le client a bien été crée" });
        return inertia.render('Clients');
    }
    async deleteClient({ params, session, response }) {
        const client = await Client_1.default.findOrFail(params.id);
        await client.delete();
        session.flash({ success: "Le Client a bien été supprimé" });
        return response.redirect().toRoute('home/Client');
    }
}
exports.default = ClientController;
//# sourceMappingURL=ClientController.js.map