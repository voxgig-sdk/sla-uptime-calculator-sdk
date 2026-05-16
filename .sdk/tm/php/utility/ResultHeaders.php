<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK utility: result_headers

class SlaUptimeCalculatorResultHeaders
{
    public static function call(SlaUptimeCalculatorContext $ctx): ?SlaUptimeCalculatorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
