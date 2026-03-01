import { autoUpdater, UpdateInfo } from 'electron-updater';
import { BrowserWindow, dialog } from 'electron';
import log from 'electron-log';

/**
 * Setup auto-updater for the desktop app.
 * Configures logging and event listeners for update lifecycle.
 */
export function setupUpdater(mainWindow: BrowserWindow) {
  autoUpdater.logger = log;
  (autoUpdater.logger as any).transports.file.level = 'info';

  log.info('App starting...');

  autoUpdater.on('checking-for-update', () => {
    log.info('Checking for update...');
  });

  autoUpdater.on('update-available', (info: UpdateInfo) => {
    log.info('Update available.');
  });

  autoUpdater.on('update-not-available', (info: UpdateInfo) => {
    log.info('Update not available.');
  });

  autoUpdater.on('error', (err: Error) => {
    log.error('Error in auto-updater ' + err);
  });

  autoUpdater.on('download-progress', (progressObj: any) => {
    let log_message = "Download speed: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - Downloaded ' + progressObj.percentage + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    log.info(log_message);
  });

  autoUpdater.on('update-downloaded', (info: UpdateInfo) => {
    log.info('Update downloaded');
    dialog.showMessageBox({
      type: 'info',
      title: 'Update Ready',
      message: 'A new version of ATiQ is ready. Restart now to apply updates?',
      buttons: ['Restart', 'Later']
    }).then((result) => {
      if (result.response === 0) {
        autoUpdater.quitAndInstall();
      }
    });
  });

  // Check for updates
  autoUpdater.checkForUpdatesAndNotify();
}
