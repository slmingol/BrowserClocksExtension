// Default settings
const DEFAULT_SETTINGS = {
  timeFormat: '12',
  dateFormat: 'short',
  showSeconds: true,
  showTimezone: true,
  theme: 'dark'
};

// Load settings on page load
document.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();
  
  // Event listeners
  document.getElementById('saveBtn').addEventListener('click', saveSettings);
  document.getElementById('resetBtn').addEventListener('click', resetSettings);
});

// Load settings from storage
async function loadSettings() {
  const result = await chrome.storage.sync.get(['settings']);
  const settings = result.settings || DEFAULT_SETTINGS;
  
  // Update UI with loaded settings
  document.getElementById('timeFormat').value = settings.timeFormat;
  document.getElementById('dateFormat').value = settings.dateFormat;
  document.getElementById('showSeconds').checked = settings.showSeconds;
  document.getElementById('showTimezone').checked = settings.showTimezone;
  document.getElementById('theme').value = settings.theme;
}

// Save settings to storage
async function saveSettings() {
  const settings = {
    timeFormat: document.getElementById('timeFormat').value,
    dateFormat: document.getElementById('dateFormat').value,
    showSeconds: document.getElementById('showSeconds').checked,
    showTimezone: document.getElementById('showTimezone').checked,
    theme: document.getElementById('theme').value
  };
  
  await chrome.storage.sync.set({ settings });
  
  // Show success message
  const successMessage = document.getElementById('successMessage');
  successMessage.classList.add('show');
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 3000);
}

// Reset to default settings
async function resetSettings() {
  if (confirm('Are you sure you want to reset all settings to defaults?')) {
    await chrome.storage.sync.set({ settings: DEFAULT_SETTINGS });
    await loadSettings();
    
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Settings reset to defaults!';
    successMessage.classList.add('show');
    setTimeout(() => {
      successMessage.textContent = 'Settings saved successfully!';
      successMessage.classList.remove('show');
    }, 3000);
  }
}
