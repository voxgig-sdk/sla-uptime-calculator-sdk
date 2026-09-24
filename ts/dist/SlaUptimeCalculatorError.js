"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlaUptimeCalculatorError = void 0;
class SlaUptimeCalculatorError extends Error {
    isSlaUptimeCalculatorError = true;
    sdk = 'SlaUptimeCalculator';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.SlaUptimeCalculatorError = SlaUptimeCalculatorError;
//# sourceMappingURL=SlaUptimeCalculatorError.js.map