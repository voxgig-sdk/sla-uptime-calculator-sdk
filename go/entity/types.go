// Typed models for the SlaUptimeCalculator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Api is the typed data model for the api entity.
type Api struct {
	DailyDown *string `json:"daily_down,omitempty"`
	DailyDownSec *float64 `json:"daily_down_sec,omitempty"`
	MonthlyDown *string `json:"monthly_down,omitempty"`
	MonthlyDownSec *float64 `json:"monthly_down_sec,omitempty"`
	Nine *string `json:"nine,omitempty"`
	QuarterlyDown *string `json:"quarterly_down,omitempty"`
	QuarterlyDownSec *float64 `json:"quarterly_down_sec,omitempty"`
	Sla *float64 `json:"sla,omitempty"`
	UptimeUrl *string `json:"uptime_url,omitempty"`
	WeeklyDown *string `json:"weekly_down,omitempty"`
	WeeklyDownSec *float64 `json:"weekly_down_sec,omitempty"`
	YearlyDown *string `json:"yearly_down,omitempty"`
	YearlyDownSec *float64 `json:"yearly_down_sec,omitempty"`
}

// ApiLoadMatch is the typed request payload for Api.LoadTyped.
type ApiLoadMatch struct {
	DailyDown *string `json:"daily_down,omitempty"`
	DailyDownSec *float64 `json:"daily_down_sec,omitempty"`
	MonthlyDown *string `json:"monthly_down,omitempty"`
	MonthlyDownSec *float64 `json:"monthly_down_sec,omitempty"`
	Nine *string `json:"nine,omitempty"`
	QuarterlyDown *string `json:"quarterly_down,omitempty"`
	QuarterlyDownSec *float64 `json:"quarterly_down_sec,omitempty"`
	Sla *float64 `json:"sla,omitempty"`
	UptimeUrl *string `json:"uptime_url,omitempty"`
	WeeklyDown *string `json:"weekly_down,omitempty"`
	WeeklyDownSec *float64 `json:"weekly_down_sec,omitempty"`
	YearlyDown *string `json:"yearly_down,omitempty"`
	YearlyDownSec *float64 `json:"yearly_down_sec,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
