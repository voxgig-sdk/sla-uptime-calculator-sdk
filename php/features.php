<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class SlaUptimeCalculatorFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new SlaUptimeCalculatorBaseFeature();
            case "test":
                return new SlaUptimeCalculatorTestFeature();
            default:
                return new SlaUptimeCalculatorBaseFeature();
        }
    }
}
