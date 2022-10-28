"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateUserValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.minLength(3)
            ]),
            email: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.minLength(5),
                Validator_1.rules.unique({ table: 'users', column: 'email' })
            ]),
            password: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.minLength(7)
            ]),
        });
        this.messages = {};
    }
}
exports.default = UpdateUserValidator;
//# sourceMappingURL=UpdateUserValidator.js.map