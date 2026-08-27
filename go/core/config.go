package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "SlaUptimeCalculator",
			"slug": "sla-uptime-calculator",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://get.uptime.is",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"api": map[string]any{},
			},
		},
		"entity": map[string]any{
			"api": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "SLA",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "dailyDown",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dailyDownSecs",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "monthlyDown",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "monthlyDownSecs",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "nines",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quarterlyDown",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quarterlyDownSecs",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "uptimeURL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weeklyDown",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weeklyDownSecs",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "yearlyDown",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "yearlyDownSecs",
						"type": "`$NUMBER`",
					},
				},
				"name": "api",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "1h20m",
											"kind": "query",
											"name": "down",
											"orig": "down",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": []any{
												8,
												8,
												8,
												8,
												8,
												0,
												0,
											},
											"kind": "query",
											"name": "dur",
											"orig": "dur",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": 99.9,
											"kind": "query",
											"name": "sla",
											"orig": "sla",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api",
								"parts": []any{
									"api",
								},
								"select": map[string]any{
									"exist": []any{
										"down",
										"dur",
										"sla",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
