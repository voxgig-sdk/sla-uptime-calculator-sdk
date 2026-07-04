# Typed models for the SlaUptimeCalculator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Api:
    daily_down: Optional[str] = None
    daily_down_sec: Optional[float] = None
    monthly_down: Optional[str] = None
    monthly_down_sec: Optional[float] = None
    nine: Optional[str] = None
    quarterly_down: Optional[str] = None
    quarterly_down_sec: Optional[float] = None
    sla: Optional[float] = None
    uptime_url: Optional[str] = None
    weekly_down: Optional[str] = None
    weekly_down_sec: Optional[float] = None
    yearly_down: Optional[str] = None
    yearly_down_sec: Optional[float] = None


@dataclass
class ApiLoadMatch:
    daily_down: Optional[str] = None
    daily_down_sec: Optional[float] = None
    monthly_down: Optional[str] = None
    monthly_down_sec: Optional[float] = None
    nine: Optional[str] = None
    quarterly_down: Optional[str] = None
    quarterly_down_sec: Optional[float] = None
    sla: Optional[float] = None
    uptime_url: Optional[str] = None
    weekly_down: Optional[str] = None
    weekly_down_sec: Optional[float] = None
    yearly_down: Optional[str] = None
    yearly_down_sec: Optional[float] = None

