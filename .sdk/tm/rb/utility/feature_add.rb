# SlaUptimeCalculator SDK utility: feature_add
module SlaUptimeCalculatorUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
