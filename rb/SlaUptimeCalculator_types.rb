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
# @!attribute [rw] SLA
#   @return [Float, nil]
#
# @!attribute [rw] dailyDown
#   @return [String, nil]
#
# @!attribute [rw] dailyDownSecs
#   @return [Float, nil]
#
# @!attribute [rw] monthlyDown
#   @return [String, nil]
#
# @!attribute [rw] monthlyDownSecs
#   @return [Float, nil]
#
# @!attribute [rw] nines
#   @return [String, nil]
#
# @!attribute [rw] quarterlyDown
#   @return [String, nil]
#
# @!attribute [rw] quarterlyDownSecs
#   @return [Float, nil]
#
# @!attribute [rw] uptimeURL
#   @return [String, nil]
#
# @!attribute [rw] weeklyDown
#   @return [String, nil]
#
# @!attribute [rw] weeklyDownSecs
#   @return [Float, nil]
#
# @!attribute [rw] yearlyDown
#   @return [String, nil]
#
# @!attribute [rw] yearlyDownSecs
#   @return [Float, nil]
Api = Struct.new(
  :SLA,
  :dailyDown,
  :dailyDownSecs,
  :monthlyDown,
  :monthlyDownSecs,
  :nines,
  :quarterlyDown,
  :quarterlyDownSecs,
  :uptimeURL,
  :weeklyDown,
  :weeklyDownSecs,
  :yearlyDown,
  :yearlyDownSecs,
  keyword_init: true
)

# Request payload for Api#load.
#
# @!attribute [rw] SLA
#   @return [Float, nil]
#
# @!attribute [rw] dailyDown
#   @return [String, nil]
#
# @!attribute [rw] dailyDownSecs
#   @return [Float, nil]
#
# @!attribute [rw] monthlyDown
#   @return [String, nil]
#
# @!attribute [rw] monthlyDownSecs
#   @return [Float, nil]
#
# @!attribute [rw] nines
#   @return [String, nil]
#
# @!attribute [rw] quarterlyDown
#   @return [String, nil]
#
# @!attribute [rw] quarterlyDownSecs
#   @return [Float, nil]
#
# @!attribute [rw] uptimeURL
#   @return [String, nil]
#
# @!attribute [rw] weeklyDown
#   @return [String, nil]
#
# @!attribute [rw] weeklyDownSecs
#   @return [Float, nil]
#
# @!attribute [rw] yearlyDown
#   @return [String, nil]
#
# @!attribute [rw] yearlyDownSecs
#   @return [Float, nil]
ApiLoadMatch = Struct.new(
  :SLA,
  :dailyDown,
  :dailyDownSecs,
  :monthlyDown,
  :monthlyDownSecs,
  :nines,
  :quarterlyDown,
  :quarterlyDownSecs,
  :uptimeURL,
  :weeklyDown,
  :weeklyDownSecs,
  :yearlyDown,
  :yearlyDownSecs,
  keyword_init: true
)

