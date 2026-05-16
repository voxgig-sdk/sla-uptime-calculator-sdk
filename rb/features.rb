# SlaUptimeCalculator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module SlaUptimeCalculatorFeatures
  def self.make_feature(name)
    case name
    when "base"
      SlaUptimeCalculatorBaseFeature.new
    when "test"
      SlaUptimeCalculatorTestFeature.new
    else
      SlaUptimeCalculatorBaseFeature.new
    end
  end
end
