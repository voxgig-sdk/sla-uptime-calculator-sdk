-- SlaUptimeCalculator SDK exists test

local sdk = require("sla-uptime-calculator_sdk")

describe("SlaUptimeCalculatorSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
