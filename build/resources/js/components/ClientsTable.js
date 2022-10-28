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
const react_1 = __importStar(require("react"));
function ClientsTable({ data, auth }) {
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'mb-3' },
            react_1.default.createElement("input", { type: "text", name: "searchBar", id: "searchBar", value: searchTerm, placeholder: 'Rechercher', onChange: (e) => { setSearchTerm(e.target.value); } })),
        react_1.default.createElement("div", { className: 'list-group md-3' }, data.filter((item) => {
            return item.name.toUpperCase().includes(searchTerm.toUpperCase());
        }).map((item) => {
            return (react_1.default.createElement("div", null, (auth.id == item.user_id || auth.id == 1) &&
                react_1.default.createElement("div", { className: 'list-group-item', key: item.id },
                    react_1.default.createElement("div", { className: 'row justify-content-around' },
                        react_1.default.createElement("div", { className: 'col' },
                            react_1.default.createElement("h4", null, item.name)),
                        react_1.default.createElement("div", { className: 'col justify-content-end' },
                            react_1.default.createElement("a", { href: '/clientFranchise/' + item.id, className: "btn btn-outline-success" }, "franchises du client"))),
                    react_1.default.createElement("div", null,
                        "Contact:",
                        item.user?.name ? " " + item.user?.name + " " : "pas de contact enregistré",
                        item.user?.email),
                    react_1.default.createElement("div", null,
                        "Droit global:",
                        item.drink ? "Vendre des boissons. " : '',
                        item.newsletter ? "Envoyer des newsletters. " : '',
                        item.planning ? "Gérer le planning équipe. " : ''),
                    auth.role == 1 &&
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { href: '/showClient/' + item.id, className: "btn btn-success" }, "Modifier")))));
        }))));
}
exports.default = ClientsTable;
//# sourceMappingURL=ClientsTable.js.map