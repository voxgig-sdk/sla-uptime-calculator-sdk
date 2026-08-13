# SlaUptimeCalculator SDK utility: make_context

from projectname_sdk.core.context import SlaUptimeCalculatorContext


def make_context_util(ctxmap, basectx):
    return SlaUptimeCalculatorContext(ctxmap, basectx)
