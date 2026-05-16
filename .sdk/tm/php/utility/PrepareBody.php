<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK utility: prepare_body

class SlaUptimeCalculatorPrepareBody
{
    public static function call(SlaUptimeCalculatorContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
