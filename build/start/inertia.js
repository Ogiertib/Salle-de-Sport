"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Inertia_1 = __importDefault(global[Symbol.for('ioc.use')]("EidelLev/Inertia"));
Inertia_1.default.share({
    errors: (ctx) => {
        return ctx.session.flashMessages.get('errors');
    },
}).version(() => Inertia_1.default.manifestFile('public/assets/manifest.json'));
//# sourceMappingURL=inertia.js.map