# SlaUptimeCalculator SDK configuration

module SlaUptimeCalculatorConfig
  def self.make_config
    {
      "main" => {
        "name" => "SlaUptimeCalculator",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://get.uptime.is",
        "auth" => {
          "prefix" => "Bearer",
        },
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
              "active" => true,
              "name" => "daily_down",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "daily_down_sec",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "monthly_down",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "monthly_down_sec",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "nine",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "quarterly_down",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "quarterly_down_sec",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "sla",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "uptime_url",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "weekly_down",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "weekly_down_sec",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 10,
            },
            {
              "active" => true,
              "name" => "yearly_down",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 11,
            },
            {
              "active" => true,
              "name" => "yearly_down_sec",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 12,
            },
          ],
          "name" => "api",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "1h20m",
                        "kind" => "query",
                        "name" => "down",
                        "orig" => "down",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
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
                        "reqd" => false,
                        "type" => "`$ARRAY`",
                      },
                      {
                        "active" => true,
                        "example" => 99.9,
                        "kind" => "query",
                        "name" => "sla",
                        "orig" => "sla",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api",
                  "parts" => [
                    "api",
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
                  "index$" => 0,
                },
              ],
              "key$" => "load",
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
