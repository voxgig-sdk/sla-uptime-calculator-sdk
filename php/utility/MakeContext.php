<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SlaUptimeCalculatorMakeContext
{
    public static function call(array $ctxmap, ?SlaUptimeCalculatorContext $basectx): SlaUptimeCalculatorContext
    {
        return new SlaUptimeCalculatorContext($ctxmap, $basectx);
    }
}
