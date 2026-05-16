<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK base feature

class SlaUptimeCalculatorBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(SlaUptimeCalculatorContext $ctx, array $options): void {}
    public function PostConstruct(SlaUptimeCalculatorContext $ctx): void {}
    public function PostConstructEntity(SlaUptimeCalculatorContext $ctx): void {}
    public function SetData(SlaUptimeCalculatorContext $ctx): void {}
    public function GetData(SlaUptimeCalculatorContext $ctx): void {}
    public function GetMatch(SlaUptimeCalculatorContext $ctx): void {}
    public function SetMatch(SlaUptimeCalculatorContext $ctx): void {}
    public function PrePoint(SlaUptimeCalculatorContext $ctx): void {}
    public function PreSpec(SlaUptimeCalculatorContext $ctx): void {}
    public function PreRequest(SlaUptimeCalculatorContext $ctx): void {}
    public function PreResponse(SlaUptimeCalculatorContext $ctx): void {}
    public function PreResult(SlaUptimeCalculatorContext $ctx): void {}
    public function PreDone(SlaUptimeCalculatorContext $ctx): void {}
    public function PreUnexpected(SlaUptimeCalculatorContext $ctx): void {}
}
