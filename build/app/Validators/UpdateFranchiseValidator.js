"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Client_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Client"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UpdateFranchiseValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.minLength(3)
            ]),
            clientId: Validator_1.schema.number([
                Validator_1.rules.exists({ column: Client_1.default.primaryKey, table: Client_1.default.table })
            ]),
            userId: Validator_1.schema.number([
                Validator_1.rules.exists({ column: User_1.default.primaryKey, table: User_1.default.table })
            ]),
            address: Validator_1.schema.string({ trim: true }),
            active: Validator_1.schema.boolean.nullableAndOptional(),
            planning: Validator_1.schema.boolean.nullableAndOptional(),
            newsletter: Validator_1.schema.boolean.nullableAndOptional(),
            drink: Validator_1.schema.boolean.nullableAndOptional()
        });
        this.messages = {};
    }
}
exports.default = UpdateFranchiseValidator;
//# sourceMappingURL=UpdateFranchiseValidator.js.map