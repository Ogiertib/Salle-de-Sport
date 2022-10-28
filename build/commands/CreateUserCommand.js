"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class CreateUserCommand extends standalone_1.BaseCommand {
    async run() {
        const { default: User } = await Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Models/User')));
        await User.create({
            email: 'joe@doe.fr',
            name: 'John',
            role: 1,
            password: '1234'
        });
        this.logger.info('User créé');
    }
}
exports.default = CreateUserCommand;
CreateUserCommand.commandName = 'create:user';
CreateUserCommand.description = 'crée un User';
CreateUserCommand.settings = {
    loadApp: true,
    stayAlive: false,
};
//# sourceMappingURL=CreateUserCommand.js.map