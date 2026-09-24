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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ApiEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SLA_UPTIME_CALCULATOR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SLA_UPTIME_CALCULATOR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SlaUptimeCalculatorSDK.test();
        const ent = testsdk.Api();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SLA_UPTIME_CALCULATOR_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "SLA": { "a": true, "h": "Sla", "n": "SLA", "r": false, "t": "`$NUMBER`", "key$": "SLA", "index$": 0 }, "dailyDown": { "a": true, "h": "Daily Down", "n": "dailyDown", "r": false, "t": "`$STRING`", "key$": "dailyDown", "index$": 1 }, "dailyDownSecs": { "a": true, "h": "Daily Down Secs", "n": "dailyDownSecs", "r": false, "t": "`$NUMBER`", "key$": "dailyDownSecs", "index$": 2 }, "monthlyDown": { "a": true, "h": "Monthly Down", "n": "monthlyDown", "r": false, "t": "`$STRING`", "key$": "monthlyDown", "index$": 3 }, "monthlyDownSecs": { "a": true, "h": "Monthly Down Secs", "n": "monthlyDownSecs", "r": false, "t": "`$NUMBER`", "key$": "monthlyDownSecs", "index$": 4 }, "nines": { "a": true, "h": "Nines", "n": "nines", "r": false, "t": "`$STRING`", "key$": "nines", "index$": 5 }, "quarterlyDown": { "a": true, "h": "Quarterly Down", "n": "quarterlyDown", "r": false, "t": "`$STRING`", "key$": "quarterlyDown", "index$": 6 }, "quarterlyDownSecs": { "a": true, "h": "Quarterly Down Secs", "n": "quarterlyDownSecs", "r": false, "t": "`$NUMBER`", "key$": "quarterlyDownSecs", "index$": 7 }, "uptimeURL": { "a": true, "h": "Uptime Url", "n": "uptimeURL", "r": false, "t": "`$STRING`", "key$": "uptimeURL", "index$": 8 }, "weeklyDown": { "a": true, "h": "Weekly Down", "n": "weeklyDown", "r": false, "t": "`$STRING`", "key$": "weeklyDown", "index$": 9 }, "weeklyDownSecs": { "a": true, "h": "Weekly Down Secs", "n": "weeklyDownSecs", "r": false, "t": "`$NUMBER`", "key$": "weeklyDownSecs", "index$": 10 }, "yearlyDown": { "a": true, "h": "Yearly Down", "n": "yearlyDown", "r": false, "t": "`$STRING`", "key$": "yearlyDown", "index$": 11 }, "yearlyDownSecs": { "a": true, "h": "Yearly Down Secs", "n": "yearlyDownSecs", "r": false, "t": "`$NUMBER`", "key$": "yearlyDownSecs", "index$": 12 } }, "name": "api", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "1h20m", "k": "query", "n": "down", "or": "down", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": [8, 8, 8, 8, 8, 0, 0], "k": "query", "n": "dur", "or": "dur", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "ex": 99.9, "k": "query", "n": "sla", "or": "sla", "r": false, "t": "`$NUMBER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api", "q": { "exist": ["down", "dur", "sla"] }, "r": {}, "s": [{ "lit": "api" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "api", "name__orig": "api", "Name": "Api", "name_": "api", "name-": "api", "NAME": "API", "index$": 0 }, { "active": true, "entity": "api", "key$": "BasicApiFlow", "kind": "basic", "name": "BasicApiFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_ref01", "srcdatavar": "api_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_ref01" } }], "index$": 0 }] }, 'Api', { "GET /api": { "protocol": "http", "operationId": "calculateSLA", "responses": { "200": { "description": "Successful calculation response", "content": { "application/json": { "schema": { "oneOf": [{ "type": "object", "description": "Response for simple SLA calculation (24/7 uptime requirement)", "properties": { "SLA": { "type": "number", "format": "float", "description": "The SLA uptime percentage", "example": 99.9 }, "nines": { "type": "string", "description": "Descriptive name for the number of nines in the SLA", "example": "three nines" }, "dailyDownSecs": { "type": "number", "format": "float", "description": "Acceptable downtime in seconds per day", "example": 86.39999999999509 }, "dailyDown": { "type": "string", "description": "Acceptable downtime per day in human-readable format", "example": "1m 26s" }, "weeklyDownSecs": { "type": "number", "format": "float", "description": "Acceptable downtime in seconds per week", "example": 604.7999999999656 }, "weeklyDown": { "type": "string", "description": "Acceptable downtime per week in human-readable format", "example": "10m 4.8s" }, "monthlyDownSecs": { "type": "number", "format": "float", "description": "Acceptable downtime in seconds per month", "example": 2629.745999999851 }, "monthlyDown": { "type": "string", "description": "Acceptable downtime per month in human-readable format", "example": "43m 50s" }, "quarterlyDownSecs": { "type": "number", "format": "float", "description": "Acceptable downtime in seconds per quarter", "example": 7889.237999999554 }, "quarterlyDown": { "type": "string", "description": "Acceptable downtime per quarter in human-readable format", "example": "2h 11m 29s" }, "yearlyDownSecs": { "type": "number", "format": "float", "description": "Acceptable downtime in seconds per year", "example": 31556.951999998204 }, "yearlyDown": { "type": "string", "description": "Acceptable downtime per year in human-readable format", "example": "8h 45m 57s" }, "uptimeURL": { "type": "string", "format": "uri", "description": "URL to view this calculation on uptime.is website", "example": "https://uptime.is/99.9" } }, "required": ["SLA", "nines", "dailyDownSecs", "dailyDown", "weeklyDownSecs", "weeklyDown", "monthlyDownSecs", "monthlyDown", "quarterlyDownSecs", "quarterlyDown", "yearlyDownSecs", "yearlyDown", "uptimeURL"], "x-ref": "#/components/schemas/SimpleSLAResponse" }, { "type": "object", "description": "Response for complex SLA calculation with custom durations per day", "properties": { "mondayHours": { "type": "integer", "description": "Uptime requirement hours for Monday", "example": 8 }, "tuesdayHours": { "type": "integer", "description": "Uptime requirement hours for Tuesday", "example": 8 }, "wednesdayHours": { "type": "integer", "description": "Uptime requirement hours for Wednesday", "example": 8 }, "thursdayHours": { "type": "integer", "description": "Uptime requirement hours for Thursday", "example": 8 }, "fridayHours": { "type": "integer", "description": "Uptime requirement hours for Friday", "example": 8 }, "saturdayHours": { "type": "integer", "description": "Uptime requirement hours for Saturday", "example": 0 }, "sundayHours": { "type": "integer", "description": "Uptime requirement hours for Sunday", "example": 0 }, "SLA": { "type": "number", "format": "float", "description": "The SLA uptime percentage", "example": 99.9 }, "nines": { "type": "string", "description": "Descriptive name for the number of nines in the SLA", "example": "three nines" }, "weeklyDownSecs": { "type": "number", "format": "float", "description": "Acceptable downtime in seconds per week", "example": 143.99999999999181 }, "weeklyDown": { "type": "string", "description": "Acceptable downtime per week in human-readable format", "example": "2m 24s" }, "monthlyDownSecs": { "type": "number", "format": "float", "description": "Acceptable downtime in seconds per month", "example": 626.1299999999645 }, "monthlyDown": { "type": "string", "description": "Acceptable downtime per month in human-readable format", "example": "10m 26s" }, "quarterlyDownSecs": { "type": "number", "format": "float", "description": "Acceptable downtime in seconds per quarter", "example": 1878.3899999998937 }, "quarterlyDown": { "type": "string", "description": "Acceptable downtime per quarter in human-readable format", "example": "31m 18s" }, "yearlyDownSecs": { "type": "number", "format": "float", "description": "Acceptable downtime in seconds per year", "example": 7513.559999999573 }, "yearlyDown": { "type": "string", "description": "Acceptable downtime per year in human-readable format", "example": "2h 5m 14s" }, "uptimeURL": { "type": "string", "format": "uri", "description": "URL to view this calculation on uptime.is website", "example": "https://uptime.is/complex?sla=99.9&wk=iiiiiaa" } }, "required": ["mondayHours", "tuesdayHours", "wednesdayHours", "thursdayHours", "fridayHours", "saturdayHours", "sundayHours", "SLA", "nines", "weeklyDownSecs", "weeklyDown", "monthlyDownSecs", "monthlyDown", "quarterlyDownSecs", "quarterlyDown", "yearlyDownSecs", "yearlyDown", "uptimeURL"], "x-ref": "#/components/schemas/ComplexSLAResponse" }, { "type": "object", "description": "Response for simple reverse SLA calculation (converts downtime to SLA percentage)", "properties": { "downtimeSecs": { "type": "number", "format": "float", "description": "Downtime duration in seconds", "example": 4800 }, "downtime": { "type": "string", "description": "Downtime duration in human-readable format", "example": "1h 20m 0s" }, "dailySLA": { "type": "number", "format": "float", "description": "SLA percentage for daily calculation period", "example": 94.44444444444444 }, "weeklySLA": { "type": "number", "format": "float", "description": "SLA percentage for weekly calculation period", "example": 99.2063492063492 }, "monthlySLA": { "type": "number", "format": "float", "description": "SLA percentage for monthly calculation period", "example": 99.81747286620077 }, "quarterlySLA": { "type": "number", "format": "float", "description": "SLA percentage for quarterly calculation period", "example": 99.93915762206693 }, "yearlySLA": { "type": "number", "format": "float", "description": "SLA percentage for yearly calculation period", "example": 99.98478940551674 }, "downtimeURL": { "type": "string", "format": "uri", "description": "URL to view this calculation on uptime.is website", "example": "https://uptime.is/reverse?down=4800" } }, "required": ["downtimeSecs", "downtime", "dailySLA", "weeklySLA", "monthlySLA", "quarterlySLA", "yearlySLA", "downtimeURL"], "x-ref": "#/components/schemas/SimpleReverseSLAResponse" }, { "type": "object", "description": "Response for complex reverse SLA calculation with custom durations per day", "properties": { "mondayHours": { "type": "integer", "description": "Uptime requirement hours for Monday", "example": 8 }, "tuesdayHours": { "type": "integer", "description": "Uptime requirement hours for Tuesday", "example": 8 }, "wednesdayHours": { "type": "integer", "description": "Uptime requirement hours for Wednesday", "example": 8 }, "thursdayHours": { "type": "integer", "description": "Uptime requirement hours for Thursday", "example": 8 }, "fridayHours": { "type": "integer", "description": "Uptime requirement hours for Friday", "example": 8 }, "saturdayHours": { "type": "integer", "description": "Uptime requirement hours for Saturday", "example": 0 }, "sundayHours": { "type": "integer", "description": "Uptime requirement hours for Sunday", "example": 0 }, "downtimeSecs": { "type": "number", "format": "float", "description": "Downtime duration in seconds", "example": 4800 }, "downtime": { "type": "string", "description": "Downtime duration in human-readable format", "example": "1h 20m 0s" }, "weeklySLA": { "type": "number", "format": "float", "description": "SLA percentage for weekly calculation period", "example": 96.66666666666667 }, "monthlySLA": { "type": "number", "format": "float", "description": "SLA percentage for monthly calculation period", "example": 99.23338603804322 }, "quarterlySLA": { "type": "number", "format": "float", "description": "SLA percentage for quarterly calculation period", "example": 99.74446201268108 }, "yearlySLA": { "type": "number", "format": "float", "description": "SLA percentage for yearly calculation period", "example": 99.93611550317027 }, "downtimeURL": { "type": "string", "format": "uri", "description": "URL to view this calculation on uptime.is website", "example": "https://uptime.is/reverse?down=4800&wk=iiiiiaa" } }, "required": ["mondayHours", "tuesdayHours", "wednesdayHours", "thursdayHours", "fridayHours", "saturdayHours", "sundayHours", "downtimeSecs", "downtime", "weeklySLA", "monthlySLA", "quarterlySLA", "yearlySLA", "downtimeURL"], "x-ref": "#/components/schemas/ComplexReverseSLAResponse" }] }, "examples": { "simpleSLA": { "summary": "Simple SLA calculation", "value": { "SLA": 99.9, "nines": "three nines", "dailyDownSecs": 86.39999999999509, "dailyDown": "1m 26s", "weeklyDownSecs": 604.7999999999656, "weeklyDown": "10m 4.8s", "monthlyDownSecs": 2629.745999999851, "monthlyDown": "43m 50s", "quarterlyDownSecs": 7889.237999999554, "quarterlyDown": "2h 11m 29s", "yearlyDownSecs": 31556.951999998204, "yearlyDown": "8h 45m 57s", "uptimeURL": "https://uptime.is/99.9" } }, "complexSLA": { "summary": "Complex SLA calculation with custom durations", "value": { "mondayHours": 8, "tuesdayHours": 8, "wednesdayHours": 8, "thursdayHours": 8, "fridayHours": 8, "saturdayHours": 0, "sundayHours": 0, "SLA": 99.9, "nines": "three nines", "weeklyDownSecs": 143.99999999999181, "weeklyDown": "2m 24s", "monthlyDownSecs": 626.1299999999645, "monthlyDown": "10m 26s", "quarterlyDownSecs": 1878.3899999998937, "quarterlyDown": "31m 18s", "yearlyDownSecs": 7513.559999999573, "yearlyDown": "2h 5m 14s", "uptimeURL": "https://uptime.is/complex?sla=99.9&wk=iiiiiaa" } }, "simpleReverse": { "summary": "Simple reverse SLA calculation", "value": { "downtimeSecs": 4800, "downtime": "1h 20m 0s", "dailySLA": 94.44444444444444, "weeklySLA": 99.2063492063492, "monthlySLA": 99.81747286620077, "quarterlySLA": 99.93915762206693, "yearlySLA": 99.98478940551674, "downtimeURL": "https://uptime.is/reverse?down=4800" } }, "complexReverse": { "summary": "Complex reverse SLA calculation", "value": { "mondayHours": 8, "tuesdayHours": 8, "wednesdayHours": 8, "thursdayHours": 8, "fridayHours": 8, "saturdayHours": 0, "sundayHours": 0, "downtimeSecs": 4800, "downtime": "1h 20m 0s", "weeklySLA": 96.66666666666667, "monthlySLA": 99.23338603804322, "quarterlySLA": 99.74446201268108, "yearlySLA": 99.93611550317027, "downtimeURL": "https://uptime.is/reverse?down=4800&wk=iiiiiaa" } } } } } }, "400": { "description": "Bad request - invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message describing the invalid request" } } } } } } }, "parameters": [{ "name": "sla", "in": "query", "description": "SLA uptime percentage (e.g., 99.9 for three nines). Used in forward calculation mode to determine acceptable downtime.", "required": false, "schema": { "type": "number", "format": "float", "minimum": 0, "maximum": 100, "example": 99.9 }, "index$": 0 }, { "name": "down", "in": "query", "description": "Downtime duration for reverse calculation. Can be specified as seconds (e.g., 42) or as a combination using h, m, s units (e.g., 1h20m, 13m37s).", "required": false, "schema": { "type": "string", "example": "1h20m" }, "index$": 1 }, { "name": "dur", "in": "query", "description": "Duration in hours for each day of the week for complex calculations. Specify 7 times (Monday through Sunday). Defaults to 24 hours if not provided. Use 0 for days with no uptime requirement.", "required": false, "schema": { "type": "array", "items": { "type": "integer", "minimum": 0, "maximum": 24 }, "minItems": 7, "maxItems": 7, "example": [8, 8, 8, 8, 8, 0, 0] }, "explode": true, "style": "form", "index$": 2 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_ref01_data = Object.values(setup.data.existing.api)[0];
        // LOAD
        const api_ref01_ent = client.Api();
        const api_ref01_match_dt0 = {};
        const api_ref01_data_dt0 = (await api_ref01_ent.load(api_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != api_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api/ApiTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SlaUptimeCalculatorSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api01', 'api02', 'api03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SLA_UPTIME_CALCULATOR_TEST_API_ENTID': idmap,
        'SLA_UPTIME_CALCULATOR_TEST_LIVE': 'FALSE',
        'SLA_UPTIME_CALCULATOR_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['SLA_UPTIME_CALCULATOR_TEST_API_ENTID'];
    const live = 'TRUE' === env.SLA_UPTIME_CALCULATOR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SLA_UPTIME_CALCULATOR_TEST_API_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.SlaUptimeCalculatorSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.SLA_UPTIME_CALCULATOR_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ApiEntity.test.js.map