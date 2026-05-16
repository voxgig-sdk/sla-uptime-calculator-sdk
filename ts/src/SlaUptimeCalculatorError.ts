
import { Context } from './Context'


class SlaUptimeCalculatorError extends Error {

  isSlaUptimeCalculatorError = true

  sdk = 'SlaUptimeCalculator'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  SlaUptimeCalculatorError
}

