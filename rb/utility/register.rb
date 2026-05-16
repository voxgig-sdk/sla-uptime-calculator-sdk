# SlaUptimeCalculator SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

SlaUptimeCalculatorUtility.registrar = ->(u) {
  u.clean = SlaUptimeCalculatorUtilities::Clean
  u.done = SlaUptimeCalculatorUtilities::Done
  u.make_error = SlaUptimeCalculatorUtilities::MakeError
  u.feature_add = SlaUptimeCalculatorUtilities::FeatureAdd
  u.feature_hook = SlaUptimeCalculatorUtilities::FeatureHook
  u.feature_init = SlaUptimeCalculatorUtilities::FeatureInit
  u.fetcher = SlaUptimeCalculatorUtilities::Fetcher
  u.make_fetch_def = SlaUptimeCalculatorUtilities::MakeFetchDef
  u.make_context = SlaUptimeCalculatorUtilities::MakeContext
  u.make_options = SlaUptimeCalculatorUtilities::MakeOptions
  u.make_request = SlaUptimeCalculatorUtilities::MakeRequest
  u.make_response = SlaUptimeCalculatorUtilities::MakeResponse
  u.make_result = SlaUptimeCalculatorUtilities::MakeResult
  u.make_point = SlaUptimeCalculatorUtilities::MakePoint
  u.make_spec = SlaUptimeCalculatorUtilities::MakeSpec
  u.make_url = SlaUptimeCalculatorUtilities::MakeUrl
  u.param = SlaUptimeCalculatorUtilities::Param
  u.prepare_auth = SlaUptimeCalculatorUtilities::PrepareAuth
  u.prepare_body = SlaUptimeCalculatorUtilities::PrepareBody
  u.prepare_headers = SlaUptimeCalculatorUtilities::PrepareHeaders
  u.prepare_method = SlaUptimeCalculatorUtilities::PrepareMethod
  u.prepare_params = SlaUptimeCalculatorUtilities::PrepareParams
  u.prepare_path = SlaUptimeCalculatorUtilities::PreparePath
  u.prepare_query = SlaUptimeCalculatorUtilities::PrepareQuery
  u.result_basic = SlaUptimeCalculatorUtilities::ResultBasic
  u.result_body = SlaUptimeCalculatorUtilities::ResultBody
  u.result_headers = SlaUptimeCalculatorUtilities::ResultHeaders
  u.transform_request = SlaUptimeCalculatorUtilities::TransformRequest
  u.transform_response = SlaUptimeCalculatorUtilities::TransformResponse
}
