# SlaUptimeCalculator SDK configuration


def make_config():
    return {
        "main": {
            "name": "SlaUptimeCalculator",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://get.uptime.is",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "api": {},
            },
        },
        "entity": {
      "api": {
        "fields": [
          {
            "name": "daily_down",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "daily_down_sec",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "monthly_down",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "monthly_down_sec",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nine",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "quarterly_down",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "quarterly_down_sec",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "sla",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "uptime_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "weekly_down",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "weekly_down_sec",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "yearly_down",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "yearly_down_sec",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 12,
          },
        ],
        "name": "api",
        "op": {
          "load": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": [
                        8,
                        8,
                        8,
                        8,
                        8,
                        0,
                        0,
                      ],
                      "kind": "query",
                      "name": "dur",
                      "orig": "dur",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "example": 99.9,
                      "kind": "query",
                      "name": "sla",
                      "orig": "sla",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api",
                "parts": [
                  "api",
                ],
                "select": {
                  "exist": [
                    "down",
                    "dur",
                    "sla",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
