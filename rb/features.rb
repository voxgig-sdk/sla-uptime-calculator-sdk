# SlaUptimeCalculator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module SlaUptimeCalculatorFeatures
  def self.make_feature(name)
    case name
    when "base"
      SlaUptimeCalculatorBaseFeature.new
    when "ratelimit"
      SlaUptimeCalculatorRatelimitFeature.new
    when "retry"
      SlaUptimeCalculatorRetryFeature.new
    when "test"
      SlaUptimeCalculatorTestFeature.new
    when "timeout"
      SlaUptimeCalculatorTimeoutFeature.new
    else
      SlaUptimeCalculatorBaseFeature.new
    end
  end
end
