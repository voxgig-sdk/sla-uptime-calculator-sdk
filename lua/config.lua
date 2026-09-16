-- SlaUptimeCalculator SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "SlaUptimeCalculator",
      slug = "sla-uptime-calculator",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://get.uptime.is",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["api"] = {},
      },
    },
    entity = {
      ["api"] = {
        ["fields"] = {
          {
            ["name"] = "SLA",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "dailyDown",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dailyDownSecs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "monthlyDown",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "monthlyDownSecs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "nines",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "quarterlyDown",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "quarterlyDownSecs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "uptimeURL",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "weeklyDown",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "weeklyDownSecs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "yearlyDown",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "yearlyDownSecs",
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "api",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "1h20m",
                      ["kind"] = "query",
                      ["name"] = "down",
                      ["orig"] = "down",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = {
                        8,
                        8,
                        8,
                        8,
                        8,
                        0,
                        0,
                      },
                      ["kind"] = "query",
                      ["name"] = "dur",
                      ["orig"] = "dur",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["example"] = 99.9,
                      ["kind"] = "query",
                      ["name"] = "sla",
                      ["orig"] = "sla",
                      ["type"] = "`$NUMBER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "down",
                    "dur",
                    "sla",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
