# SlaUptimeCalculator SDK utility: make_context
require_relative '../core/context'
module SlaUptimeCalculatorUtilities
  MakeContext = ->(ctxmap, basectx) {
    SlaUptimeCalculatorContext.new(ctxmap, basectx)
  }
end
