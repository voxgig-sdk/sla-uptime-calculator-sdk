import { Context } from './Context';
declare class SlaUptimeCalculatorError extends Error {
    isSlaUptimeCalculatorError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { SlaUptimeCalculatorError };
