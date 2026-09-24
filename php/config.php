<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK configuration

class SlaUptimeCalculatorConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "SlaUptimeCalculator",
                "slug" => "sla-uptime-calculator",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://get.uptime.is",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "api" => [],
                ],
            ],
            "entity" => [
        'api' => [
          'fields' => [
            [
              'name' => 'SLA',
              'title' => 'Sla',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'dailyDown',
              'title' => 'Daily Down',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dailyDownSecs',
              'title' => 'Daily Down Secs',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'monthlyDown',
              'title' => 'Monthly Down',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'monthlyDownSecs',
              'title' => 'Monthly Down Secs',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'nines',
              'title' => 'Nines',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quarterlyDown',
              'title' => 'Quarterly Down',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quarterlyDownSecs',
              'title' => 'Quarterly Down Secs',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'uptimeURL',
              'title' => 'Uptime Url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'weeklyDown',
              'title' => 'Weekly Down',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'weeklyDownSecs',
              'title' => 'Weekly Down Secs',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'yearlyDown',
              'title' => 'Yearly Down',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'yearlyDownSecs',
              'title' => 'Yearly Down Secs',
              'type' => '`$NUMBER`',
            ],
          ],
          'name' => 'api',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                  ],
                  'parts' => [
                    'api',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'down',
                        'orig' => 'down',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '1h20m',
                      ],
                      [
                        'name' => 'dur',
                        'orig' => 'dur',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => [
                          8,
                          8,
                          8,
                          8,
                          8,
                          0,
                          0,
                        ],
                      ],
                      [
                        'name' => 'sla',
                        'orig' => 'sla',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'example' => 99.9,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'down',
                      'dur',
                      'sla',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return SlaUptimeCalculatorFeatures::make_feature($name);
    }
}
