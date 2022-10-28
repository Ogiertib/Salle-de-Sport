"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AddUserIdToClients extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'clients';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.integer('user_id')
                .unsigned()
                .references('users.id')
                .onDelete('SET NULL')
                .nullable();
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('user_id');
        });
    }
}
exports.default = AddUserIdToClients;
//# sourceMappingURL=1664221988619_add_user_id_to_clients.js.map