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
function FranchisesTable({ data, auth }) {
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    const [checked, setChecked] = (0, react_1.useState)(false);
    const handleChange = () => {
        setChecked(!checked);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'row mb-3' },
            react_1.default.createElement("div", { className: 'col' },
                react_1.default.createElement("input", { type: "text", name: "searchBar", id: "searchBar", value: searchTerm, placeholder: 'Rechercher', onChange: (e) => { setSearchTerm(e.target.value); } })),
            react_1.default.createElement("div", { className: 'col' },
                react_1.default.createElement("label", null,
                    react_1.default.createElement("input", { type: "checkbox", checked: checked, onChange: handleChange }),
                    "Franchise Active"))),
        react_1.default.createElement("div", { className: 'list-group' }, data.filter((item) => {
            return item.name.toUpperCase().includes(searchTerm.toUpperCase())
                && checked ? item.active : item.name.toUpperCase().includes(searchTerm.toUpperCase());
        }).map((item) => {
            return (react_1.default.createElement("div", null,
                (auth.id == item.user_id || auth.id == 1) &&
                    react_1.default.createElement("div", { className: 'list-group-item', key: item.id },
                        react_1.default.createElement("h4", null, item.name),
                        react_1.default.createElement("div", null, item.active ? react_1.default.createElement("p", null,
                            "La franchise est ",
                            react_1.default.createElement("strong", null, "active")) : "La franchise est désactivé"),
                        react_1.default.createElement("div", null,
                            "adresse:",
                            react_1.default.createElement("strong", null,
                                " ",
                                item.address)),
                        react_1.default.createElement("div", null,
                            "Client:",
                            react_1.default.createElement("strong", null, item.client?.name ? item.client?.name : "pas de Client pour cette franchise")),
                        react_1.default.createElement("div", null,
                            "Contact:",
                            react_1.default.createElement("strong", null,
                                item.user?.name ? " " + item.user?.name + " " : "pas de contact enregistré",
                                item.user?.email)),
                        react_1.default.createElement("div", null,
                            "La franchise peut:",
                            react_1.default.createElement("strong", null,
                                item.drink ? "Vendre des boissons. " : '',
                                item.newsletter ? "Envoyer des newsletters. " : '',
                                item.planning ? "Gérer le planning équipe. " : '')),
                        auth.role == 1 && react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { href: 'showFranchise/' + item.id, className: "btn btn-success" }, "Modifier"))),
                " "));
        }))));
}
exports.default = FranchisesTable;
//# sourceMappingURL=FranchisesTable.js.map