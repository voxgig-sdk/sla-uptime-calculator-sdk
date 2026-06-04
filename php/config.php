<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK configuration

class SlaUptimeCalculatorConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "SlaUptimeCalculator",
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
              'name' => 'daily_down',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'daily_down_sec',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'monthly_down',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'monthly_down_sec',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'nine',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'quarterly_down',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'quarterly_down_sec',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'sla',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'uptime_url',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'weekly_down',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'weekly_down_sec',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'yearly_down',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'yearly_down_sec',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 12,
            ],
          ],
          'name' => 'api',
          'op' => [
            'load' => [
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
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
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
                        'reqd' => false,
                        'type' => '`$ARRAY`',
                        'active' => true,
                      ],
                      [
                        'example' => 99.9,
                        'kind' => 'query',
                        'name' => 'sla',
                        'orig' => 'sla',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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
