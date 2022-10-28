"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const prop_types_1 = __importDefault(require("prop-types"));
const Modal = ({ isShowing, hide, title, ...props }) => isShowing
    ? react_dom_1.default.createPortal(react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "modal-overlay" },
            react_1.default.createElement("div", { className: "modal-wrapper" },
                react_1.default.createElement("div", { className: "modal" },
                    react_1.default.createElement("div", { className: "modal-header" },
                        react_1.default.createElement("h4", null, title),
                        react_1.default.createElement("button", { type: "button", className: "modal-close-button", onClick: hide },
                            react_1.default.createElement("span", null, "\u00D7"))),
                    react_1.default.createElement("div", { className: "modal-body" }, props.children))))), document.body)
    : null;
Modal.propTypes = {
    isShowing: prop_types_1.default.bool.isRequired,
    hide: prop_types_1.default.func.isRequired,
    title: prop_types_1.default.string.isRequired
};
exports.default = Modal;
//# sourceMappingURL=modal.js.map