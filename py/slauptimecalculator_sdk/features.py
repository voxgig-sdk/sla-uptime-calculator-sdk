# SlaUptimeCalculator SDK feature factory

from slauptimecalculator_sdk.feature.base_feature import SlaUptimeCalculatorBaseFeature
from slauptimecalculator_sdk.feature.ratelimit_feature import SlaUptimeCalculatorRatelimitFeature
from slauptimecalculator_sdk.feature.retry_feature import SlaUptimeCalculatorRetryFeature
from slauptimecalculator_sdk.feature.test_feature import SlaUptimeCalculatorTestFeature
from slauptimecalculator_sdk.feature.timeout_feature import SlaUptimeCalculatorTimeoutFeature


_FEATURES = {
    "base": lambda: SlaUptimeCalculatorBaseFeature(),
    "ratelimit": lambda: SlaUptimeCalculatorRatelimitFeature(),
    "retry": lambda: SlaUptimeCalculatorRetryFeature(),
    "test": lambda: SlaUptimeCalculatorTestFeature(),
    "timeout": lambda: SlaUptimeCalculatorTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
