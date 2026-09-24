
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SlaUptimeCalculatorSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = SlaUptimeCalculatorSDK.test()
    equal(testsdk instanceof SlaUptimeCalculatorSDK, true,
      'SlaUptimeCalculatorSDK.test() must return a client synchronously')
  })

})
