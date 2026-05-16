# SlaUptimeCalculator SDK utility: make_context

from core.context import SlaUptimeCalculatorContext


def make_context_util(ctxmap, basectx):
    return SlaUptimeCalculatorContext(ctxmap, basectx)
