

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SlaUptimeCalculatorSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLA_UPTIME_CALCULATOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLA_UPTIME_CALCULATOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlaUptimeCalculatorSDK.test()
    const ent = testsdk.Api()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SLA_UPTIME_CALCULATOR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"SLA","req":false,"type":"`$NUMBER`","index$":0},{"active":true,"name":"dailyDown","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"dailyDownSecs","req":false,"type":"`$NUMBER`","index$":2},{"active":true,"name":"monthlyDown","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"monthlyDownSecs","req":false,"type":"`$NUMBER`","index$":4},{"active":true,"name":"nines","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"quarterlyDown","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"quarterlyDownSecs","req":false,"type":"`$NUMBER`","index$":7},{"active":true,"name":"uptimeURL","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"weeklyDown","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"weeklyDownSecs","req":false,"type":"`$NUMBER`","index$":10},{"active":true,"name":"yearlyDown","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"yearlyDownSecs","req":false,"type":"`$NUMBER`","index$":12}],"name":"api","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"1h20m","kind":"query","name":"down","orig":"down","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":[8,8,8,8,8,0,0],"kind":"query","name":"dur","orig":"dur","reqd":false,"type":"`$ARRAY`","index$":1},{"active":true,"example":99.9,"kind":"query","name":"sla","orig":"sla","reqd":false,"type":"`$NUMBER`","index$":2}]},"contract":{"id":"GET /api","json":"{\"operationId\":\"calculateSLA\",\"parameters\":[{\"description\":\"SLA uptime percentage (e.g., 99.9 for three nines). Used in forward calculation mode to determine acceptable downtime.\",\"in\":\"query\",\"name\":\"sla\",\"required\":false,\"schema\":{\"example\":99.9,\"format\":\"float\",\"maximum\":100,\"minimum\":0,\"type\":\"number\"}},{\"description\":\"Downtime duration for reverse calculation. Can be specified as seconds (e.g., 42) or as a combination using h, m, s units (e.g., 1h20m, 13m37s).\",\"in\":\"query\",\"name\":\"down\",\"required\":false,\"schema\":{\"example\":\"1h20m\",\"type\":\"string\"}},{\"description\":\"Duration in hours for each day of the week for complex calculations. Specify 7 times (Monday through Sunday). Defaults to 24 hours if not provided. Use 0 for days with no uptime requirement.\",\"explode\":true,\"in\":\"query\",\"name\":\"dur\",\"required\":false,\"schema\":{\"example\":[8,8,8,8,8,0,0],\"items\":{\"maximum\":24,\"minimum\":0,\"type\":\"integer\"},\"maxItems\":7,\"minItems\":7,\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"complexReverse\":{\"summary\":\"Complex reverse SLA calculation\",\"value\":{\"downtime\":\"1h 20m 0s\",\"downtimeSecs\":4800,\"downtimeURL\":\"https://uptime.is/reverse?down=4800&wk=iiiiiaa\",\"fridayHours\":8,\"mondayHours\":8,\"monthlySLA\":99.23338603804322,\"quarterlySLA\":99.74446201268108,\"saturdayHours\":0,\"sundayHours\":0,\"thursdayHours\":8,\"tuesdayHours\":8,\"wednesdayHours\":8,\"weeklySLA\":96.66666666666667,\"yearlySLA\":99.93611550317027}},\"complexSLA\":{\"summary\":\"Complex SLA calculation with custom durations\",\"value\":{\"SLA\":99.9,\"fridayHours\":8,\"mondayHours\":8,\"monthlyDown\":\"10m 26s\",\"monthlyDownSecs\":626.1299999999645,\"nines\":\"three nines\",\"quarterlyDown\":\"31m 18s\",\"quarterlyDownSecs\":1878.3899999998937,\"saturdayHours\":0,\"sundayHours\":0,\"thursdayHours\":8,\"tuesdayHours\":8,\"uptimeURL\":\"https://uptime.is/complex?sla=99.9&wk=iiiiiaa\",\"wednesdayHours\":8,\"weeklyDown\":\"2m 24s\",\"weeklyDownSecs\":143.99999999999181,\"yearlyDown\":\"2h 5m 14s\",\"yearlyDownSecs\":7513.559999999573}},\"simpleReverse\":{\"summary\":\"Simple reverse SLA calculation\",\"value\":{\"dailySLA\":94.44444444444444,\"downtime\":\"1h 20m 0s\",\"downtimeSecs\":4800,\"downtimeURL\":\"https://uptime.is/reverse?down=4800\",\"monthlySLA\":99.81747286620077,\"quarterlySLA\":99.93915762206693,\"weeklySLA\":99.2063492063492,\"yearlySLA\":99.98478940551674}},\"simpleSLA\":{\"summary\":\"Simple SLA calculation\",\"value\":{\"SLA\":99.9,\"dailyDown\":\"1m 26s\",\"dailyDownSecs\":86.39999999999509,\"monthlyDown\":\"43m 50s\",\"monthlyDownSecs\":2629.745999999851,\"nines\":\"three nines\",\"quarterlyDown\":\"2h 11m 29s\",\"quarterlyDownSecs\":7889.237999999554,\"uptimeURL\":\"https://uptime.is/99.9\",\"weeklyDown\":\"10m 4.8s\",\"weeklyDownSecs\":604.7999999999656,\"yearlyDown\":\"8h 45m 57s\",\"yearlyDownSecs\":31556.951999998204}}},\"schema\":{\"oneOf\":[{\"description\":\"Response for simple SLA calculation (24/7 uptime requirement)\",\"properties\":{\"SLA\":{\"description\":\"The SLA uptime percentage\",\"example\":99.9,\"format\":\"float\",\"type\":\"number\"},\"dailyDown\":{\"description\":\"Acceptable downtime per day in human-readable format\",\"example\":\"1m 26s\",\"type\":\"string\"},\"dailyDownSecs\":{\"description\":\"Acceptable downtime in seconds per day\",\"example\":86.39999999999509,\"format\":\"float\",\"type\":\"number\"},\"monthlyDown\":{\"description\":\"Acceptable downtime per month in human-readable format\",\"example\":\"43m 50s\",\"type\":\"string\"},\"monthlyDownSecs\":{\"description\":\"Acceptable downtime in seconds per month\",\"example\":2629.745999999851,\"format\":\"float\",\"type\":\"number\"},\"nines\":{\"description\":\"Descriptive name for the number of nines in the SLA\",\"example\":\"three nines\",\"type\":\"string\"},\"quarterlyDown\":{\"description\":\"Acceptable downtime per quarter in human-readable format\",\"example\":\"2h 11m 29s\",\"type\":\"string\"},\"quarterlyDownSecs\":{\"description\":\"Acceptable downtime in seconds per quarter\",\"example\":7889.237999999554,\"format\":\"float\",\"type\":\"number\"},\"uptimeURL\":{\"description\":\"URL to view this calculation on uptime.is website\",\"example\":\"https://uptime.is/99.9\",\"format\":\"uri\",\"type\":\"string\"},\"weeklyDown\":{\"description\":\"Acceptable downtime per week in human-readable format\",\"example\":\"10m 4.8s\",\"type\":\"string\"},\"weeklyDownSecs\":{\"description\":\"Acceptable downtime in seconds per week\",\"example\":604.7999999999656,\"format\":\"float\",\"type\":\"number\"},\"yearlyDown\":{\"description\":\"Acceptable downtime per year in human-readable format\",\"example\":\"8h 45m 57s\",\"type\":\"string\"},\"yearlyDownSecs\":{\"description\":\"Acceptable downtime in seconds per year\",\"example\":31556.951999998204,\"format\":\"float\",\"type\":\"number\"}},\"required\":[\"SLA\",\"nines\",\"dailyDownSecs\",\"dailyDown\",\"weeklyDownSecs\",\"weeklyDown\",\"monthlyDownSecs\",\"monthlyDown\",\"quarterlyDownSecs\",\"quarterlyDown\",\"yearlyDownSecs\",\"yearlyDown\",\"uptimeURL\"],\"type\":\"object\"},{\"description\":\"Response for complex SLA calculation with custom durations per day\",\"properties\":{\"SLA\":{\"description\":\"The SLA uptime percentage\",\"example\":99.9,\"format\":\"float\",\"type\":\"number\"},\"fridayHours\":{\"description\":\"Uptime requirement hours for Friday\",\"example\":8,\"type\":\"integer\"},\"mondayHours\":{\"description\":\"Uptime requirement hours for Monday\",\"example\":8,\"type\":\"integer\"},\"monthlyDown\":{\"description\":\"Acceptable downtime per month in human-readable format\",\"example\":\"10m 26s\",\"type\":\"string\"},\"monthlyDownSecs\":{\"description\":\"Acceptable downtime in seconds per month\",\"example\":626.1299999999645,\"format\":\"float\",\"type\":\"number\"},\"nines\":{\"description\":\"Descriptive name for the number of nines in the SLA\",\"example\":\"three nines\",\"type\":\"string\"},\"quarterlyDown\":{\"description\":\"Acceptable downtime per quarter in human-readable format\",\"example\":\"31m 18s\",\"type\":\"string\"},\"quarterlyDownSecs\":{\"description\":\"Acceptable downtime in seconds per quarter\",\"example\":1878.3899999998937,\"format\":\"float\",\"type\":\"number\"},\"saturdayHours\":{\"description\":\"Uptime requirement hours for Saturday\",\"example\":0,\"type\":\"integer\"},\"sundayHours\":{\"description\":\"Uptime requirement hours for Sunday\",\"example\":0,\"type\":\"integer\"},\"thursdayHours\":{\"description\":\"Uptime requirement hours for Thursday\",\"example\":8,\"type\":\"integer\"},\"tuesdayHours\":{\"description\":\"Uptime requirement hours for Tuesday\",\"example\":8,\"type\":\"integer\"},\"uptimeURL\":{\"description\":\"URL to view this calculation on uptime.is website\",\"example\":\"https://uptime.is/complex?sla=99.9&wk=iiiiiaa\",\"format\":\"uri\",\"type\":\"string\"},\"wednesdayHours\":{\"description\":\"Uptime requirement hours for Wednesday\",\"example\":8,\"type\":\"integer\"},\"weeklyDown\":{\"description\":\"Acceptable downtime per week in human-readable format\",\"example\":\"2m 24s\",\"type\":\"string\"},\"weeklyDownSecs\":{\"description\":\"Acceptable downtime in seconds per week\",\"example\":143.99999999999181,\"format\":\"float\",\"type\":\"number\"},\"yearlyDown\":{\"description\":\"Acceptable downtime per year in human-readable format\",\"example\":\"2h 5m 14s\",\"type\":\"string\"},\"yearlyDownSecs\":{\"description\":\"Acceptable downtime in seconds per year\",\"example\":7513.559999999573,\"format\":\"float\",\"type\":\"number\"}},\"required\":[\"mondayHours\",\"tuesdayHours\",\"wednesdayHours\",\"thursdayHours\",\"fridayHours\",\"saturdayHours\",\"sundayHours\",\"SLA\",\"nines\",\"weeklyDownSecs\",\"weeklyDown\",\"monthlyDownSecs\",\"monthlyDown\",\"quarterlyDownSecs\",\"quarterlyDown\",\"yearlyDownSecs\",\"yearlyDown\",\"uptimeURL\"],\"type\":\"object\"},{\"description\":\"Response for simple reverse SLA calculation (converts downtime to SLA percentage)\",\"properties\":{\"dailySLA\":{\"description\":\"SLA percentage for daily calculation period\",\"example\":94.44444444444444,\"format\":\"float\",\"type\":\"number\"},\"downtime\":{\"description\":\"Downtime duration in human-readable format\",\"example\":\"1h 20m 0s\",\"type\":\"string\"},\"downtimeSecs\":{\"description\":\"Downtime duration in seconds\",\"example\":4800,\"format\":\"float\",\"type\":\"number\"},\"downtimeURL\":{\"description\":\"URL to view this calculation on uptime.is website\",\"example\":\"https://uptime.is/reverse?down=4800\",\"format\":\"uri\",\"type\":\"string\"},\"monthlySLA\":{\"description\":\"SLA percentage for monthly calculation period\",\"example\":99.81747286620077,\"format\":\"float\",\"type\":\"number\"},\"quarterlySLA\":{\"description\":\"SLA percentage for quarterly calculation period\",\"example\":99.93915762206693,\"format\":\"float\",\"type\":\"number\"},\"weeklySLA\":{\"description\":\"SLA percentage for weekly calculation period\",\"example\":99.2063492063492,\"format\":\"float\",\"type\":\"number\"},\"yearlySLA\":{\"description\":\"SLA percentage for yearly calculation period\",\"example\":99.98478940551674,\"format\":\"float\",\"type\":\"number\"}},\"required\":[\"downtimeSecs\",\"downtime\",\"dailySLA\",\"weeklySLA\",\"monthlySLA\",\"quarterlySLA\",\"yearlySLA\",\"downtimeURL\"],\"type\":\"object\"},{\"description\":\"Response for complex reverse SLA calculation with custom durations per day\",\"properties\":{\"downtime\":{\"description\":\"Downtime duration in human-readable format\",\"example\":\"1h 20m 0s\",\"type\":\"string\"},\"downtimeSecs\":{\"description\":\"Downtime duration in seconds\",\"example\":4800,\"format\":\"float\",\"type\":\"number\"},\"downtimeURL\":{\"description\":\"URL to view this calculation on uptime.is website\",\"example\":\"https://uptime.is/reverse?down=4800&wk=iiiiiaa\",\"format\":\"uri\",\"type\":\"string\"},\"fridayHours\":{\"description\":\"Uptime requirement hours for Friday\",\"example\":8,\"type\":\"integer\"},\"mondayHours\":{\"description\":\"Uptime requirement hours for Monday\",\"example\":8,\"type\":\"integer\"},\"monthlySLA\":{\"description\":\"SLA percentage for monthly calculation period\",\"example\":99.23338603804322,\"format\":\"float\",\"type\":\"number\"},\"quarterlySLA\":{\"description\":\"SLA percentage for quarterly calculation period\",\"example\":99.74446201268108,\"format\":\"float\",\"type\":\"number\"},\"saturdayHours\":{\"description\":\"Uptime requirement hours for Saturday\",\"example\":0,\"type\":\"integer\"},\"sundayHours\":{\"description\":\"Uptime requirement hours for Sunday\",\"example\":0,\"type\":\"integer\"},\"thursdayHours\":{\"description\":\"Uptime requirement hours for Thursday\",\"example\":8,\"type\":\"integer\"},\"tuesdayHours\":{\"description\":\"Uptime requirement hours for Tuesday\",\"example\":8,\"type\":\"integer\"},\"wednesdayHours\":{\"description\":\"Uptime requirement hours for Wednesday\",\"example\":8,\"type\":\"integer\"},\"weeklySLA\":{\"description\":\"SLA percentage for weekly calculation period\",\"example\":96.66666666666667,\"format\":\"float\",\"type\":\"number\"},\"yearlySLA\":{\"description\":\"SLA percentage for yearly calculation period\",\"example\":99.93611550317027,\"format\":\"float\",\"type\":\"number\"}},\"required\":[\"mondayHours\",\"tuesdayHours\",\"wednesdayHours\",\"thursdayHours\",\"fridayHours\",\"saturdayHours\",\"sundayHours\",\"downtimeSecs\",\"downtime\",\"weeklySLA\",\"monthlySLA\",\"quarterlySLA\",\"yearlySLA\",\"downtimeURL\"],\"type\":\"object\"}]}}},\"description\":\"Successful calculation response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the invalid request\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api","segments":[{"lit":"api"}],"select":{"exist":["down","dur","sla"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api","name__orig":"api","Name":"Api","name_":"api","name-":"api","NAME":"API","index$":0}, {"active":true,"entity":"api","key$":"BasicApiFlow","kind":"basic","name":"BasicApiFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_ref01","srcdatavar":"api_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_ref01"}}],"index$":0}]}, 'Api')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_ref01_data = Object.values(setup.data.existing.api)[0] as any

    // LOAD
    const api_ref01_ent = client.Api()
    const api_ref01_match_dt0: any = {}
    const api_ref01_data_dt0 = (await api_ref01_ent.load(api_ref01_match_dt0)).data()
    assert(null != api_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api/ApiTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SlaUptimeCalculatorSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['api01','api02','api03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLA_UPTIME_CALCULATOR_TEST_API_ENTID': idmap,
    'SLA_UPTIME_CALCULATOR_TEST_LIVE': 'FALSE',
    'SLA_UPTIME_CALCULATOR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SLA_UPTIME_CALCULATOR_TEST_API_ENTID']

  const live = 'TRUE' === env.SLA_UPTIME_CALCULATOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLA_UPTIME_CALCULATOR_TEST_API_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SlaUptimeCalculatorSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SLA_UPTIME_CALCULATOR_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
