#!/bin/bash

# ATiQ Editor Release Check Script
# Ensures VSIX package is ready for distribution

set -e

echo "🔍 ATiQ Release Check v1.0.1"
echo "================================"

# Check if VSIX exists
if [ ! -f "apps/extension/atiq-ai-1.0.0-final.vsix" ]; then
    echo "❌ ERROR: No VSIX file found!"
    echo "Run: pnpm --filter atiq-ai build && cd apps/extension && npx @vscode/vsce package --no-dependencies"
    exit 1
fi

# Check VSIX contents
echo "📦 Checking VSIX contents..."
VSIX_FILE="apps/extension/atiq-ai-1.0.0-final.vsix"

if [ -f "$VSIX_FILE" ]; then
    echo "✅ VSIX file found: $VSIX_FILE"
    
    # Check for forbidden files
    echo "🔒 Scanning for sensitive files..."
    if unzip -l "$VSIX_FILE" | grep -E '\.(env|log|secret|key|token)' > /dev/null; then
        echo "❌ ERROR: Sensitive files detected in VSIX!"
        exit 1
    fi
    
    # Check for required assets
    echo "📋 Checking required assets..."
    if unzip -l "$VSIX_FILE" | grep -q 'extension/package.json' > /dev/null; then
        echo "✅ package.json found"
    else
        echo "❌ ERROR: package.json missing from VSIX!"
        exit 1
    fi
    
    if unzip -l "$VSIX_FILE" | grep -q 'media/welcome.webp' > /dev/null; then
        echo "✅ walkthrough assets found"
    else
        echo "❌ ERROR: walkthrough assets missing from VSIX!"
        exit 1
    fi
    
    # Check version consistency
    echo "🏷️ Checking version consistency..."
    VERSION_IN_VSIX=$(unzip -p "$VSIX_FILE" extension/package.json | grep -o '"version"' | cut -d'"' -f2)
    VERSION_IN_PACKAGE=$(grep -o '"version"' apps/extension/package.json | cut -d'"' -f2)
    
    if [ "$VERSION_IN_VSIX" != "$VERSION_IN_PACKAGE" ]; then
        echo "❌ ERROR: Version mismatch! VSIX: $VERSION_IN_VSIX, Package: $VERSION_IN_PACKAGE"
        exit 1
    fi
    
    # Check telemetry default
    echo "📊 Checking telemetry configuration..."
    TELEMETRY_DEFAULT=$(unzip -p "$VSIX_FILE" extension/package.json | grep -o '"telemetryEnabled"' | cut -d'"' -f2)
    
    if [ "$TELEMETRY_DEFAULT" != "true" ]; then
        echo "⚠️  WARNING: Telemetry not enabled by default"
    fi
    
    echo "✅ All checks passed! VSIX is ready for release."
    echo "📦 VSIX File: $VSIX_FILE"
    echo "📏 Size: $(du -h "$VSIX_FILE" | cut -f1)"
else
    echo "❌ ERROR: VSIX validation failed"
    exit 1
fi
