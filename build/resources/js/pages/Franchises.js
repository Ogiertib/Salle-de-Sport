"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FranchisesTable_1 = __importDefault(require("../components/FranchisesTable"));
const Franchises = ({ franchises, auth }) => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null, " Franchises"),
        auth.guards.web.user.role == 1 &&
            react_1.default.createElement("p", null,
                react_1.default.createElement("a", { href: "createFranchise/new", className: 'btn btn-success' }, "Cr\u00E9er une franchise")),
        react_1.default.createElement(FranchisesTable_1.default, { data: franchises.data, auth: auth.guards.web.user }));
};
exports.default = Franchises;
//# sourceMappingURL=Franchises.js.map