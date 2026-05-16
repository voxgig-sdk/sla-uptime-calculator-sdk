# SlaUptimeCalculator SDK feature factory

from feature.base_feature import SlaUptimeCalculatorBaseFeature
from feature.test_feature import SlaUptimeCalculatorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SlaUptimeCalculatorBaseFeature(),
        "test": lambda: SlaUptimeCalculatorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
