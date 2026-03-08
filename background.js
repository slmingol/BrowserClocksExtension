// Background service worker for BrowserClocks

// Listen for installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('BrowserClocks installed!');
    // Open options page on first install
    chrome.runtime.openOptionsPage();
  } else if (details.reason === 'update') {
    console.log('BrowserClocks updated to version', chrome.runtime.getManifest().version);
  }
});

// Set up periodic alarms for timezone database updates (future feature)
chrome.alarms.create('checkTimezoneUpdate', {
  periodInMinutes: 1440 // Check once per day
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'checkTimezoneUpdate') {
    // In a full implementation, this would check for IANA timezone database updates
    console.log('Checking for timezone database updates...');
  }
});

// Handle messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getTimezones') {
    // Could fetch from an API or return cached data
    sendResponse({ success: true });
  }
  return true;
});
