"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'SlaUptimeCalculator',
        slug: "sla-uptime-calculator",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://get.uptime.is",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            api: {},
        }
    };
    entity = {
        "api": {
            "fields": [
                {
                    "name": "SLA",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "dailyDown",
                    "type": "`$STRING`"
                },
                {
                    "name": "dailyDownSecs",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "monthlyDown",
                    "type": "`$STRING`"
                },
                {
                    "name": "monthlyDownSecs",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "nines",
                    "type": "`$STRING`"
                },
                {
                    "name": "quarterlyDown",
                    "type": "`$STRING`"
                },
                {
                    "name": "quarterlyDownSecs",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "uptimeURL",
                    "type": "`$STRING`"
                },
                {
                    "name": "weeklyDown",
                    "type": "`$STRING`"
                },
                {
                    "name": "weeklyDownSecs",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "yearlyDown",
                    "type": "`$STRING`"
                },
                {
                    "name": "yearlyDownSecs",
                    "type": "`$NUMBER`"
                }
            ],
            "name": "api",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "1h20m",
                                        "kind": "query",
                                        "name": "down",
                                        "orig": "down",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": [
                                            8,
                                            8,
                                            8,
                                            8,
                                            8,
                                            0,
                                            0
                                        ],
                                        "kind": "query",
                                        "name": "dur",
                                        "orig": "dur",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": 99.9,
                                        "kind": "query",
                                        "name": "sla",
                                        "orig": "sla",
                                        "type": "`$NUMBER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api",
                            "segments": [
                                {
                                    "lit": "api"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "down",
                                    "dur",
                                    "sla"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map