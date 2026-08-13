<?php
declare(strict_types=1);

// Typed models for the SlaUptimeCalculator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Api entity data model. */
class Api
{
    public ?float $SLA = null;
    public ?string $dailyDown = null;
    public ?float $dailyDownSecs = null;
    public ?string $monthlyDown = null;
    public ?float $monthlyDownSecs = null;
    public ?string $nines = null;
    public ?string $quarterlyDown = null;
    public ?float $quarterlyDownSecs = null;
    public ?string $uptimeURL = null;
    public ?string $weeklyDown = null;
    public ?float $weeklyDownSecs = null;
    public ?string $yearlyDown = null;
    public ?float $yearlyDownSecs = null;
}

/** Request payload for Api#load. */
class ApiLoadMatch
{
    public ?float $SLA = null;
    public ?string $dailyDown = null;
    public ?float $dailyDownSecs = null;
    public ?string $monthlyDown = null;
    public ?float $monthlyDownSecs = null;
    public ?string $nines = null;
    public ?string $quarterlyDown = null;
    public ?float $quarterlyDownSecs = null;
    public ?string $uptimeURL = null;
    public ?string $weeklyDown = null;
    public ?float $weeklyDownSecs = null;
    public ?string $yearlyDown = null;
    public ?float $yearlyDownSecs = null;
}

