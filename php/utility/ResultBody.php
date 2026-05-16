<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK utility: result_body

class SlaUptimeCalculatorResultBody
{
    public static function call(SlaUptimeCalculatorContext $ctx): ?SlaUptimeCalculatorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
