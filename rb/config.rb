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
              "title" => "Sla",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "dailyDown",
              "title" => "Daily Down",
              "type" => "`$STRING`",
            },
            {
              "name" => "dailyDownSecs",
              "title" => "Daily Down Secs",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "monthlyDown",
              "title" => "Monthly Down",
              "type" => "`$STRING`",
            },
            {
              "name" => "monthlyDownSecs",
              "title" => "Monthly Down Secs",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "nines",
              "title" => "Nines",
              "type" => "`$STRING`",
            },
            {
              "name" => "quarterlyDown",
              "title" => "Quarterly Down",
              "type" => "`$STRING`",
            },
            {
              "name" => "quarterlyDownSecs",
              "title" => "Quarterly Down Secs",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "uptimeURL",
              "title" => "Uptime Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "weeklyDown",
              "title" => "Weekly Down",
              "type" => "`$STRING`",
            },
            {
              "name" => "weeklyDownSecs",
              "title" => "Weekly Down Secs",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "yearlyDown",
              "title" => "Yearly Down",
              "type" => "`$STRING`",
            },
            {
              "name" => "yearlyDownSecs",
              "title" => "Yearly Down Secs",
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
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                  ],
                  "parts" => [
                    "api",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "down",
                        "orig" => "down",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "1h20m",
                      },
                      {
                        "name" => "dur",
                        "orig" => "dur",
                        "type" => "`$ARRAY`",
                        "kind" => "query",
                        "example" => [
                          8,
                          8,
                          8,
                          8,
                          8,
                          0,
                          0,
                        ],
                      },
                      {
                        "name" => "sla",
                        "orig" => "sla",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "example" => 99.9,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "down",
                      "dur",
                      "sla",
                    ],
                  },
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
