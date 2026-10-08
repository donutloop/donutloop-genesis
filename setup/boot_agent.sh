#!/usr/bin/env bash
# Bring the local model server up for pi-loop (same endpoint as setup/pi_qwen3.8-flash-next.json).
# pi-loop probes http://localhost:8888/v1/models before round 1 and fails fast if it is down.
set -euo pipefail
curl -sSL https://raw.githubusercontent.com/entrpi/ds4-on-spark/main/install.sh | bash -s -- --start
