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
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'dailyDown',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dailyDownSecs',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'monthlyDown',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'monthlyDownSecs',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'nines',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quarterlyDown',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quarterlyDownSecs',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'uptimeURL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'weeklyDown',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'weeklyDownSecs',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'yearlyDown',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'yearlyDownSecs',
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
                  'args' => [
                    'query' => [
                      [
                        'example' => '1h20m',
                        'kind' => 'query',
                        'name' => 'down',
                        'orig' => 'down',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => [
                          8,
                          8,
                          8,
                          8,
                          8,
                          0,
                          0,
                        ],
                        'kind' => 'query',
                        'name' => 'dur',
                        'orig' => 'dur',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 99.9,
                        'kind' => 'query',
                        'name' => 'sla',
                        'orig' => 'sla',
                        'type' => '`$NUMBER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api',
                  'parts' => [
                    'api',
                  ],
                  'select' => [
                    'exist' => [
                      'down',
                      'dur',
                      'sla',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
