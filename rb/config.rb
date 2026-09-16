# SlaUptimeCalculator SDK configuration

module SlaUptimeCalculatorConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "SlaUptimeCalculator",
        "slug" => "sla-uptime-calculator",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://get.uptime.is",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "api" => {},
        },
      },
      "entity" => {
        "api" => {
          "fields" => [
            {
              "name" => "SLA",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "dailyDown",
              "type" => "`$STRING`",
            },
            {
              "name" => "dailyDownSecs",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "monthlyDown",
              "type" => "`$STRING`",
            },
            {
              "name" => "monthlyDownSecs",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "nines",
              "type" => "`$STRING`",
            },
            {
              "name" => "quarterlyDown",
              "type" => "`$STRING`",
            },
            {
              "name" => "quarterlyDownSecs",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "uptimeURL",
              "type" => "`$STRING`",
            },
            {
              "name" => "weeklyDown",
              "type" => "`$STRING`",
            },
            {
              "name" => "weeklyDownSecs",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "yearlyDown",
              "type" => "`$STRING`",
            },
            {
              "name" => "yearlyDownSecs",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "api",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "1h20m",
                        "kind" => "query",
                        "name" => "down",
                        "orig" => "down",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => [
                          8,
                          8,
                          8,
                          8,
                          8,
                          0,
                          0,
                        ],
                        "kind" => "query",
                        "name" => "dur",
                        "orig" => "dur",
                        "type" => "`$ARRAY`",
                      },
                      {
                        "example" => 99.9,
                        "kind" => "query",
                        "name" => "sla",
                        "orig" => "sla",
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "down",
                      "dur",
                      "sla",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    SlaUptimeCalculatorFeatures.make_feature(name)
  end
end
