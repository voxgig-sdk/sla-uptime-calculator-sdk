-- Typed models for the SlaUptimeCalculator SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Api
---@field daily_down? string
---@field daily_down_sec? number
---@field monthly_down? string
---@field monthly_down_sec? number
---@field nine? string
---@field quarterly_down? string
---@field quarterly_down_sec? number
---@field sla? number
---@field uptime_url? string
---@field weekly_down? string
---@field weekly_down_sec? number
---@field yearly_down? string
---@field yearly_down_sec? number

---@class ApiLoadMatch

local M = {}

return M
