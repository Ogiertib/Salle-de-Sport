"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Categories extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'clients';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name');
            table.string('email');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.boolean('planning').notNullable().defaultTo(false);
            table.boolean('drink').notNullable().defaultTo(false);
            table.boolean('newsletter').notNullable().defaultTo(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Categories;
//# sourceMappingURL=1663340545225_clients.js.map