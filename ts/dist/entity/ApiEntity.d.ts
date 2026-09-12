import { SlaUptimeCalculatorEntityBase } from '../SlaUptimeCalculatorEntityBase';
import type { SlaUptimeCalculatorSDK } from '../SlaUptimeCalculatorSDK';
import type { Control } from '../types';
import type { Api, ApiLoadMatch } from '../SlaUptimeCalculatorTypes';
declare class ApiEntity extends SlaUptimeCalculatorEntityBase<Api> {
    constructor(client: SlaUptimeCalculatorSDK, entopts: any);
    make(this: ApiEntity): ApiEntity;
    load(this: any, reqmatch?: ApiLoadMatch, ctrl?: Control): Promise<ApiEntity>;
}
export { ApiEntity };
