# SlaUptimeCalculator SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "SlaUptimeCalculator",
            "slug": "sla-uptime-calculator",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "SLA",
            "type": "`$NUMBER`",
          },
          {
            "name": "dailyDown",
            "type": "`$STRING`",
          },
          {
            "name": "dailyDownSecs",
            "type": "`$NUMBER`",
          },
          {
            "name": "monthlyDown",
            "type": "`$STRING`",
          },
          {
            "name": "monthlyDownSecs",
            "type": "`$NUMBER`",
          },
          {
            "name": "nines",
            "type": "`$STRING`",
          },
          {
            "name": "quarterlyDown",
            "type": "`$STRING`",
          },
          {
            "name": "quarterlyDownSecs",
            "type": "`$NUMBER`",
          },
          {
            "name": "uptimeURL",
            "type": "`$STRING`",
          },
          {
            "name": "weeklyDown",
            "type": "`$STRING`",
          },
          {
            "name": "weeklyDownSecs",
            "type": "`$NUMBER`",
          },
          {
            "name": "yearlyDown",
            "type": "`$STRING`",
          },
          {
            "name": "yearlyDownSecs",
            "type": "`$NUMBER`",
          },
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
                      "type": "`$STRING`",
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
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": 99.9,
                      "kind": "query",
                      "name": "sla",
                      "orig": "sla",
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api",
                "segments": [
                  {
                    "lit": "api",
                  },
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
                "parts": [
                  "api",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
