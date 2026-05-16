package core

type SlaUptimeCalculatorError struct {
	IsSlaUptimeCalculatorError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSlaUptimeCalculatorError(code string, msg string, ctx *Context) *SlaUptimeCalculatorError {
	return &SlaUptimeCalculatorError{
		IsSlaUptimeCalculatorError: true,
		Sdk:              "SlaUptimeCalculator",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SlaUptimeCalculatorError) Error() string {
	return e.Msg
}
