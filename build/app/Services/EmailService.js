"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
class EmailService {
    static async send(params) {
        const payload = await Validator_1.validator.validate({
            schema: Validator_1.schema.create({
                name: Validator_1.schema.string({ trim: true }),
                email: Validator_1.schema.string({ trim: true }, [
                    Validator_1.rules.email()
                ]),
                message: Validator_1.schema.string({ trim: true }),
            }),
            data: params
        });
        await Mail_1.default.send((message) => {
            message
                .from('ogier9@gmail.com')
                .to(payload.email)
                .subject('Nouveau utilisateur')
                .htmlView('home/emailUtil', payload);
        });
    }
}
exports.EmailService = EmailService;
//# sourceMappingURL=EmailService.js.map