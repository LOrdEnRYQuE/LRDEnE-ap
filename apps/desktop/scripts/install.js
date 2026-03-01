const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * Post-installation setup script for ATiQ Editor.
 * Ensures necessary directories and configurations are present.
 */
function setup() {
  console.log('ATiQ Editor: Starting post-installation setup...');

  const atiqDir = path.join(os.homedir(), '.atiq');
  if (!fs.existsSync(atiqDir)) {
    fs.mkdirSync(atiqDir, { recursive: true });
    console.log(`Created ATiQ configuration directory: ${atiqDir}`);
  }

  // Create default settings if not exists
  const settingsPath = path.join(atiqDir, 'settings.json');
  if (!fs.existsSync(settingsPath)) {
    const defaultSettings = {
      telemetry: true,
      theme: 'dark',
      version: '1.0.1'
    };
    fs.writeFileSync(settingsPath, JSON.stringify(defaultSettings, null, 2));
    console.log('Initialized default settings.');
  }

  console.log('Post-installation setup complete.');
}

setup();
