# frozen_string_literal: true

# Typed models for the SlaUptimeCalculator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Api entity data model.
#
# @!attribute [rw] daily_down
#   @return [String, nil]
#
# @!attribute [rw] daily_down_sec
#   @return [Float, nil]
#
# @!attribute [rw] monthly_down
#   @return [String, nil]
#
# @!attribute [rw] monthly_down_sec
#   @return [Float, nil]
#
# @!attribute [rw] nine
#   @return [String, nil]
#
# @!attribute [rw] quarterly_down
#   @return [String, nil]
#
# @!attribute [rw] quarterly_down_sec
#   @return [Float, nil]
#
# @!attribute [rw] sla
#   @return [Float, nil]
#
# @!attribute [rw] uptime_url
#   @return [String, nil]
#
# @!attribute [rw] weekly_down
#   @return [String, nil]
#
# @!attribute [rw] weekly_down_sec
#   @return [Float, nil]
#
# @!attribute [rw] yearly_down
#   @return [String, nil]
#
# @!attribute [rw] yearly_down_sec
#   @return [Float, nil]
Api = Struct.new(
  :daily_down,
  :daily_down_sec,
  :monthly_down,
  :monthly_down_sec,
  :nine,
  :quarterly_down,
  :quarterly_down_sec,
  :sla,
  :uptime_url,
  :weekly_down,
  :weekly_down_sec,
  :yearly_down,
  :yearly_down_sec,
  keyword_init: true
)

# Match filter for Api#load (any subset of Api fields).
#
# @!attribute [rw] daily_down
#   @return [String, nil]
#
# @!attribute [rw] daily_down_sec
#   @return [Float, nil]
#
# @!attribute [rw] monthly_down
#   @return [String, nil]
#
# @!attribute [rw] monthly_down_sec
#   @return [Float, nil]
#
# @!attribute [rw] nine
#   @return [String, nil]
#
# @!attribute [rw] quarterly_down
#   @return [String, nil]
#
# @!attribute [rw] quarterly_down_sec
#   @return [Float, nil]
#
# @!attribute [rw] sla
#   @return [Float, nil]
#
# @!attribute [rw] uptime_url
#   @return [String, nil]
#
# @!attribute [rw] weekly_down
#   @return [String, nil]
#
# @!attribute [rw] weekly_down_sec
#   @return [Float, nil]
#
# @!attribute [rw] yearly_down
#   @return [String, nil]
#
# @!attribute [rw] yearly_down_sec
#   @return [Float, nil]
ApiLoadMatch = Struct.new(
  :daily_down,
  :daily_down_sec,
  :monthly_down,
  :monthly_down_sec,
  :nine,
  :quarterly_down,
  :quarterly_down_sec,
  :sla,
  :uptime_url,
  :weekly_down,
  :weekly_down_sec,
  :yearly_down,
  :yearly_down_sec,
  keyword_init: true
)

