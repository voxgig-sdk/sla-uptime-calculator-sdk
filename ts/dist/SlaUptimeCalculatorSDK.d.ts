import { ApiEntity } from './entity/ApiEntity';
export type * from './SlaUptimeCalculatorTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { SlaUptimeCalculatorEntityBase } from './SlaUptimeCalculatorEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class SlaUptimeCalculatorSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Api(entopts?: Record<string, any>): ApiEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): SlaUptimeCalculatorSDK;
    tester(testopts?: any, sdkopts?: any): SlaUptimeCalculatorSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof SlaUptimeCalculatorSDK;
export { stdutil, config, BaseFeature, SlaUptimeCalculatorEntityBase, SlaUptimeCalculatorSDK, SDK, };
