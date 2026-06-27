// Default settings
const DEFAULT_SETTINGS = {
  toolbarEnabled: true,
  toolbarPosition: 'top',
  toolbarAlign: 'left',
  toolbarMinimized: false,
  toolbarBlacklist: [], // Array of domains/URLs to exclude
  timeFormat: '12',
  dateFormat: 'short',
  showSeconds: true,
  showTimezone: true,
  theme: 'dark',
  timeSize: 14, // Font size for time in toolbar (10-24px)
  popupFontSize: 14, // Font size for popup (10-20px)
  toolbarHeight: 32, // Height of toolbar for top/bottom positions (24-80px)
  showAppName: true, // Show "BrowserClocks" name in toolbar
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif' // Font family for toolbar
};

// Load settings on page load
document.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();
  
  // Event listeners
  document.getElementById('saveBtn').addEventListener('click', saveSettings);
  document.getElementById('resetBtn').addEventListener('click', resetSettings);
  
  // Time size slider listener
  const timeSizeSlider = document.getElementById('timeSize');
  const timeSizeValue = document.getElementById('timeSizeValue');
  if (timeSizeSlider && timeSizeValue) {
    timeSizeSlider.addEventListener('input', (e) => {
      timeSizeValue.textContent = e.target.value;
    });
  }
  
  // Popup font size slider listener
  const popupFontSizeSlider = document.getElementById('popupFontSize');
  const popupFontSizeValue = document.getElementById('popupFontSizeValue');
  if (popupFontSizeSlider && popupFontSizeValue) {
    popupFontSizeSlider.addEventListener('input', (e) => {
      popupFontSizeValue.textContent = e.target.value;
    });
  }
  
  // Toolbar height slider listener
  const toolbarHeightSlider = document.getElementById('toolbarHeight');
  const toolbarHeightValue = document.getElementById('toolbarHeightValue');
  if (toolbarHeightSlider && toolbarHeightValue) {
    toolbarHeightSlider.addEventListener('input', (e) => {
      toolbarHeightValue.textContent = e.target.value;
    });
  }
  
  // Blacklist event listeners
  const addBtn = document.getElementById('addBlacklistBtn');
  const input = document.getElementById('blacklistInput');
  
  if (addBtn) {
    addBtn.addEventListener('click', addToBlacklist);
  }
  
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addToBlacklist();
      }
    });
  }
});

// Load settings from storage
async function loadSettings() {
  const result = await chrome.storage.sync.get(['settings']);
  const settings = result.settings || DEFAULT_SETTINGS;
  
  // Update UI with loaded settings
  document.getElementById('toolbarEnabled').checked = settings.toolbarEnabled !== false;
  document.getElementById('showAppName').checked = settings.showAppName !== false;
  document.getElementById('toolbarPosition').value = settings.toolbarPosition || 'top';
  document.getElementById('toolbarAlign').value = settings.toolbarAlign || 'left';
  document.getElementById('timeFormat').value = settings.timeFormat;
  document.getElementById('dateFormat').value = settings.dateFormat;
  document.getElementById('showSeconds').checked = settings.showSeconds;
  document.getElementById('showTimezone').checked = settings.showTimezone;
  document.getElementById('theme').value = settings.theme;
  
  const timeSize = settings.timeSize || 14;
  document.getElementById('timeSize').value = timeSize;
  document.getElementById('timeSizeValue').textContent = timeSize;
  
  const popupFontSize = settings.popupFontSize || 14;
  document.getElementById('popupFontSize').value = popupFontSize;
  document.getElementById('popupFontSizeValue').textContent = popupFontSize;
  
  const toolbarHeight = settings.toolbarHeight || 32;
  document.getElementById('toolbarHeight').value = toolbarHeight;
  document.getElementById('toolbarHeightValue').textContent = toolbarHeight;
  
  const fontFamily = settings.fontFamily || DEFAULT_SETTINGS.fontFamily;
  document.getElementById('fontFamily').value = fontFamily;
  
  // Load blacklist
  renderBlacklist(settings.toolbarBlacklist || []);
}

// Save settings to storage
async function saveSettings() {
  // Get current blacklist from DOM
  const blacklistItems = Array.from(document.querySelectorAll('.blacklist-item'))
    .map(item => item.dataset.entry)
    .filter(Boolean);
  
  const settings = {
    toolbarEnabled: document.getElementById('toolbarEnabled').checked,
    showAppName: document.getElementById('showAppName').checked,
    toolbarPosition: document.getElementById('toolbarPosition').value,
    toolbarAlign: document.getElementById('toolbarAlign').value,
    toolbarMinimized: false, // Reset on save
    toolbarBlacklist: blacklistItems,
    timeFormat: document.getElementById('timeFormat').value,
    dateFormat: document.getElementById('dateFormat').value,
    showSeconds: document.getElementById('showSeconds').checked,
    showTimezone: document.getElementById('showTimezone').checked,
    theme: document.getElementById('theme').value,
    timeSize: parseInt(document.getElementById('timeSize').value),
    popupFontSize: parseInt(document.getElementById('popupFontSize').value),
    toolbarHeight: parseInt(document.getElementById('toolbarHeight').value),
    fontFamily: document.getElementById('fontFamily').value.trim() || DEFAULT_SETTINGS.fontFamily
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

// Classify a blocklist entry for display purposes
function getEntryType(entry) {
  if (entry === 'file://' || entry.startsWith('file://')) return 'local';
  if (entry.startsWith('http://') || entry.startsWith('https://')) return 'url';
  return 'domain';
}

// Render blacklist
function renderBlacklist(blacklist) {
  const container = document.getElementById('blacklistItems');
  if (!container) return;

  container.innerHTML = '';

  blacklist.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'blacklist-item';
    row.dataset.entry = entry;

    const type = getEntryType(entry);
    const badge = document.createElement('span');
    badge.className = `entry-type-badge entry-type-${type}`;
    badge.textContent = type;

    const label = document.createElement('span');
    label.className = 'entry-label';
    label.textContent = entry;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-blacklist-btn';
    deleteBtn.textContent = '✕';
    deleteBtn.addEventListener('click', () => removeFromBlacklist(entry));

    row.appendChild(badge);
    row.appendChild(label);
    row.appendChild(deleteBtn);
    container.appendChild(row);
  });
}

// Normalize a raw input value into a canonical blocklist entry
function normalizeEntry(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  // file:// - keep as-is (either bare "file://" or a specific path)
  if (trimmed.startsWith('file://')) return trimmed || 'file://';

  // Full URL - keep as-is but strip trailing slash for consistency
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed.replace(/\/$/, '');
  }

  // Domain - strip any accidental protocol/www prefix and path
  return trimmed.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0].toLowerCase();
}

// Add entry to blacklist
function addToBlacklist() {
  const input = document.getElementById('blacklistInput');
  if (!input) return;

  const entry = normalizeEntry(input.value);
  if (!entry) return;

  const currentItems = Array.from(document.querySelectorAll('.blacklist-item'))
    .map(item => item.dataset.entry);

  if (currentItems.includes(entry)) {
    alert('This entry is already in the block list!');
    return;
  }

  currentItems.push(entry);
  renderBlacklist(currentItems);
  input.value = '';
}

// Remove entry from blacklist
function removeFromBlacklist(entry) {
  const currentItems = Array.from(document.querySelectorAll('.blacklist-item'))
    .map(item => item.dataset.entry)
    .filter(item => item !== entry);

  renderBlacklist(currentItems);
}

// Setup blacklist event listeners
document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('addBlacklistBtn');
  const input = document.getElementById('blacklistInput');
  
  if (addBtn) {
    addBtn.addEventListener('click', addToBlacklist);
  }
  
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addToBlacklist();
      }
    });
  }
});
