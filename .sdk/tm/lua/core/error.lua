-- SlaUptimeCalculator SDK error

local SlaUptimeCalculatorError = {}
SlaUptimeCalculatorError.__index = SlaUptimeCalculatorError


function SlaUptimeCalculatorError.new(code, msg, ctx)
  local self = setmetatable({}, SlaUptimeCalculatorError)
  self.is_sdk_error = true
  self.sdk = "SlaUptimeCalculator"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SlaUptimeCalculatorError:error()
  return self.msg
end


function SlaUptimeCalculatorError:__tostring()
  return self.msg
end


return SlaUptimeCalculatorError
