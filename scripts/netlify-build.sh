#!/bin/sh
set -e
# Install dependencies if they are missing (e.g. CLI-driven builds that skip the install step)
if [ ! -x node_modules/.bin/ng ]; then
  npm install --no-audit --no-fund
fi
# Angular 11 uses webpack 4, which needs the legacy OpenSSL provider on Node 17+
NODE_MAJOR=$(node -p "process.versions.node.split('.')[0]")
if [ "$NODE_MAJOR" -ge 17 ]; then
  export NODE_OPTIONS="--openssl-legacy-provider ${NODE_OPTIONS:-}"
fi
npx ng build
