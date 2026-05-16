
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SlaUptimeCalculatorSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await SlaUptimeCalculatorSDK.test()
    equal(null !== testsdk, true)
  })

})
