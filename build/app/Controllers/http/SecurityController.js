"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SecurityController {
    async login({ view }) {
        return view.render('auth/login');
    }
    async log({ request, auth, response, session }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            await auth.use('web').attempt(email, password);
            response.redirect().toRoute('home');
        }
        catch {
            session.flash({ error: 'Identifiant incorrect' });
            response.redirect().toRoute('login');
        }
    }
    async logout({ auth, response }) {
        await auth.use('web').logout();
        response.redirect('/login');
    }
}
exports.default = SecurityController;
//# sourceMappingURL=SecurityController.js.map