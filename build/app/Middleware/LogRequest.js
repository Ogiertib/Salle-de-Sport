"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogRequest {
    async handle({}, next) {
        await next();
    }
}
exports.default = LogRequest;
//# sourceMappingURL=LogRequest.js.map