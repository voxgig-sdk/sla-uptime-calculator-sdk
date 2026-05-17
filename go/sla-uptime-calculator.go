package voxgigslauptimecalculatorsdk

import (
	"github.com/voxgig-sdk/sla-uptime-calculator-sdk/go/core"
	"github.com/voxgig-sdk/sla-uptime-calculator-sdk/go/entity"
	"github.com/voxgig-sdk/sla-uptime-calculator-sdk/go/feature"
	_ "github.com/voxgig-sdk/sla-uptime-calculator-sdk/go/utility"
)

// Type aliases preserve external API.
type SlaUptimeCalculatorSDK = core.SlaUptimeCalculatorSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type SlaUptimeCalculatorEntity = core.SlaUptimeCalculatorEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type SlaUptimeCalculatorError = core.SlaUptimeCalculatorError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewApiEntityFunc = func(client *core.SlaUptimeCalculatorSDK, entopts map[string]any) core.SlaUptimeCalculatorEntity {
		return entity.NewApiEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewSlaUptimeCalculatorSDK = core.NewSlaUptimeCalculatorSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
