# SlaUptimeCalculator SDK exists test

require "minitest/autorun"
require_relative "../SlaUptimeCalculator_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = SlaUptimeCalculatorSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
