<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK utility: feature_add

class SlaUptimeCalculatorFeatureAdd
{
    public static function call(SlaUptimeCalculatorContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
