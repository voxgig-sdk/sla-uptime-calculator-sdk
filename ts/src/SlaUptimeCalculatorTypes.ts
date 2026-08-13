// Typed models for the SlaUptimeCalculator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Api {
  SLA?: number
  dailyDown?: string
  dailyDownSecs?: number
  monthlyDown?: string
  monthlyDownSecs?: number
  nines?: string
  quarterlyDown?: string
  quarterlyDownSecs?: number
  uptimeURL?: string
  weeklyDown?: string
  weeklyDownSecs?: number
  yearlyDown?: string
  yearlyDownSecs?: number
}

export interface ApiLoadMatch {
  SLA?: number
  dailyDown?: string
  dailyDownSecs?: number
  monthlyDown?: string
  monthlyDownSecs?: number
  nines?: string
  quarterlyDown?: string
  quarterlyDownSecs?: number
  uptimeURL?: string
  weeklyDown?: string
  weeklyDownSecs?: number
  yearlyDown?: string
  yearlyDownSecs?: number
}

