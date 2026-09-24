
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'SlaUptimeCalculator',
        slug: "sla-uptime-calculator",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
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
 retry:     {
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
 test:     {
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
 timeout:     {
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

  }


  options = {
    base: "https://get.uptime.is",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        api: {
        },
  
    }
  }


  entity = {
    "api": {
      "fields": [
        {
          "name": "SLA",
          "title": "Sla",
          "type": "`$NUMBER`"
        },
        {
          "name": "dailyDown",
          "title": "Daily Down",
          "type": "`$STRING`"
        },
        {
          "name": "dailyDownSecs",
          "title": "Daily Down Secs",
          "type": "`$NUMBER`"
        },
        {
          "name": "monthlyDown",
          "title": "Monthly Down",
          "type": "`$STRING`"
        },
        {
          "name": "monthlyDownSecs",
          "title": "Monthly Down Secs",
          "type": "`$NUMBER`"
        },
        {
          "name": "nines",
          "title": "Nines",
          "type": "`$STRING`"
        },
        {
          "name": "quarterlyDown",
          "title": "Quarterly Down",
          "type": "`$STRING`"
        },
        {
          "name": "quarterlyDownSecs",
          "title": "Quarterly Down Secs",
          "type": "`$NUMBER`"
        },
        {
          "name": "uptimeURL",
          "title": "Uptime Url",
          "type": "`$STRING`"
        },
        {
          "name": "weeklyDown",
          "title": "Weekly Down",
          "type": "`$STRING`"
        },
        {
          "name": "weeklyDownSecs",
          "title": "Weekly Down Secs",
          "type": "`$NUMBER`"
        },
        {
          "name": "yearlyDown",
          "title": "Yearly Down",
          "type": "`$STRING`"
        },
        {
          "name": "yearlyDownSecs",
          "title": "Yearly Down Secs",
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
              "kind": "http",
              "method": "GET",
              "orig": "/api",
              "segments": [
                {
                  "lit": "api"
                }
              ],
              "parts": [
                "api"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "down",
                    "orig": "down",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "1h20m"
                  },
                  {
                    "name": "dur",
                    "orig": "dur",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": [
                      8,
                      8,
                      8,
                      8,
                      8,
                      0,
                      0
                    ]
                  },
                  {
                    "name": "sla",
                    "orig": "sla",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 99.9
                  }
                ]
              },
              "select": {
                "exist": [
                  "down",
                  "dur",
                  "sla"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

