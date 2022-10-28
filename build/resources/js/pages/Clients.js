"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ClientsTable_1 = __importDefault(require("../components/ClientsTable"));
const Clients = ({ clients, auth }) => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null, " Client"),
        auth.guards.web.user.role == 1 &&
            react_1.default.createElement("p", null,
                react_1.default.createElement("a", { href: "createClient/new", className: 'btn btn-success' }, "Cr\u00E9er un Client")),
        react_1.default.createElement(ClientsTable_1.default, { data: clients.data, auth: auth.guards.web.user }));
};
exports.default = Clients;
//# sourceMappingURL=Clients.js.map