"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const EmailService_1 = global[Symbol.for('ioc.use')]("App/Services/EmailService");
const UpdateUserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateUserValidator"));
class EmailController {
    async emailClient({ view }) {
        return view.render('home/emailClient', {});
    }
    async emailFranchise({ view }) {
        return view.render('home/emailFranchise', {});
    }
    async storeFranchise({ session, request, response }) {
        const user = new User_1.default();
        const data = await request.validate(UpdateUserValidator_1.default);
        EmailService_1.EmailService.send(request.all());
        user
            .merge({ ...data,
            role: 3,
            password: 'franchise'
        })
            .save();
        session.flash('success', "Un email de validation vient d'etre envoyer");
        return response.redirect('/');
    }
    async storeClient({ session, request, response }) {
        const user = new User_1.default();
        const data = await request.validate(UpdateUserValidator_1.default);
        EmailService_1.EmailService.send(request.all());
        user
            .merge({ ...data,
            role: 2,
            password: 'clientclient'
        })
            .save();
        session.flash('success', "Un email de validation vient d'etre envoyer");
        return response.redirect('/');
    }
}
exports.default = EmailController;
new User_1.default();
//# sourceMappingURL=EmailController.js.map