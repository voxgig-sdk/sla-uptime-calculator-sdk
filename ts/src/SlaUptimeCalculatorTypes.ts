// Typed models for the SlaUptimeCalculator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Api {
  daily_down?: string
  daily_down_sec?: number
  monthly_down?: string
  monthly_down_sec?: number
  nine?: string
  quarterly_down?: string
  quarterly_down_sec?: number
  sla?: number
  uptime_url?: string
  weekly_down?: string
  weekly_down_sec?: number
  yearly_down?: string
  yearly_down_sec?: number
}

export type ApiLoadMatch = Partial<Api>

