"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/createFranchise/new', 'FranchiseController.createFranchise').as('franchise.createFranchise');
    Route_1.default.post('/createFranchise/new', 'FranchiseController.store');
    Route_1.default.post('/showFranchise/:id', 'FranchiseController.updateFranchise').as('franchise.modify');
    Route_1.default.delete('/showFranchise/:id', 'FranchiseController.deleteFranchise').as('franchise.delete');
    Route_1.default.get('/showFranchise/:id', 'FranchiseController.showFranchise').as('franchise.showFranchise');
    Route_1.default.get('/createClient/new', 'ClientController.createClient');
    Route_1.default.post('/createClient/new', 'ClientController.store');
    Route_1.default.post('/showClient/:id', 'ClientController.updateClient');
    Route_1.default.delete('/showClient/:id', 'ClientController.deleteClient').as('client.delete');
    Route_1.default.get('/showClient/:id', 'ClientController.showClient').as('client.showClient');
    Route_1.default.get('/Clients', 'ClientController.index').as('Clients');
    Route_1.default.get('/clientFranchise/:id', 'ClientController.clientFranchise');
    Route_1.default.post('/clientFranchise/:id', 'ClientController.storeFranchise');
    Route_1.default.get('/emailClient/', 'EmailController.emailClient').as('emailClient');
    Route_1.default.post('/emailClient/', 'EmailController.storeClient');
    Route_1.default.get('/emailFranchise/', 'EmailController.emailFranchise').as('emailFranchise');
    Route_1.default.post('/emailFranchise/', 'EmailController.storeFranchise');
}).middleware('auth');
Route_1.default.post('/Mdp', 'UserController.storeMdp').as('mdp.update');
Route_1.default.get('/Mdp', 'UserController.updateUserMdp').as('Mdp');
Route_1.default.get('/', 'FranchiseController.index').as('home');
Route_1.default.get('/login', 'SecurityController.login').as('login');
Route_1.default.post('/login', 'SecurityController.log').as('log');
Route_1.default.get('/logout', 'SecurityController.logout').as('logout');
//# sourceMappingURL=routes.js.map