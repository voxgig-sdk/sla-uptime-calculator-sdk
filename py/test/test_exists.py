# ProjectName SDK exists test

import pytest
from slauptimecalculator_sdk import SlaUptimeCalculatorSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = SlaUptimeCalculatorSDK.test(None, None)
        assert testsdk is not None
