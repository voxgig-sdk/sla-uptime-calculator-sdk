<?php
declare(strict_types=1);

// SlaUptimeCalculator SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

SlaUptimeCalculatorUtility::setRegistrar(function (SlaUptimeCalculatorUtility $u): void {
    $u->clean = [SlaUptimeCalculatorClean::class, 'call'];
    $u->done = [SlaUptimeCalculatorDone::class, 'call'];
    $u->make_error = [SlaUptimeCalculatorMakeError::class, 'call'];
    $u->feature_add = [SlaUptimeCalculatorFeatureAdd::class, 'call'];
    $u->feature_hook = [SlaUptimeCalculatorFeatureHook::class, 'call'];
    $u->feature_init = [SlaUptimeCalculatorFeatureInit::class, 'call'];
    $u->fetcher = [SlaUptimeCalculatorFetcher::class, 'call'];
    $u->make_fetch_def = [SlaUptimeCalculatorMakeFetchDef::class, 'call'];
    $u->make_context = [SlaUptimeCalculatorMakeContext::class, 'call'];
    $u->make_options = [SlaUptimeCalculatorMakeOptions::class, 'call'];
    $u->make_request = [SlaUptimeCalculatorMakeRequest::class, 'call'];
    $u->make_response = [SlaUptimeCalculatorMakeResponse::class, 'call'];
    $u->make_result = [SlaUptimeCalculatorMakeResult::class, 'call'];
    $u->make_point = [SlaUptimeCalculatorMakePoint::class, 'call'];
    $u->make_spec = [SlaUptimeCalculatorMakeSpec::class, 'call'];
    $u->make_url = [SlaUptimeCalculatorMakeUrl::class, 'call'];
    $u->param = [SlaUptimeCalculatorParam::class, 'call'];
    $u->prepare_auth = [SlaUptimeCalculatorPrepareAuth::class, 'call'];
    $u->prepare_body = [SlaUptimeCalculatorPrepareBody::class, 'call'];
    $u->prepare_headers = [SlaUptimeCalculatorPrepareHeaders::class, 'call'];
    $u->prepare_method = [SlaUptimeCalculatorPrepareMethod::class, 'call'];
    $u->prepare_params = [SlaUptimeCalculatorPrepareParams::class, 'call'];
    $u->prepare_path = [SlaUptimeCalculatorPreparePath::class, 'call'];
    $u->prepare_query = [SlaUptimeCalculatorPrepareQuery::class, 'call'];
    $u->result_basic = [SlaUptimeCalculatorResultBasic::class, 'call'];
    $u->result_body = [SlaUptimeCalculatorResultBody::class, 'call'];
    $u->result_headers = [SlaUptimeCalculatorResultHeaders::class, 'call'];
    $u->transform_request = [SlaUptimeCalculatorTransformRequest::class, 'call'];
    $u->transform_response = [SlaUptimeCalculatorTransformResponse::class, 'call'];
});
