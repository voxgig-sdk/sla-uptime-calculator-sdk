
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

