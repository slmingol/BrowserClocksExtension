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
  
  // Toolbar height slider listener
  const toolbarHeightSlider = document.getElementById('toolbarHeight');
  const toolbarHeightValue = document.getElementById('toolbarHeightValue');
  if (toolbarHeightSlider && toolbarHeightValue) {
    toolbarHeightSlider.addEventListener('input', (e) => {
      toolbarHeightValue.textContent = e.target.value;
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
    .map(item => item.dataset.domain)
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

// Render blacklist
function renderBlacklist(blacklist) {
  const container = document.getElementById('blacklistItems');
  if (!container) return;
  
  container.innerHTML = blacklist.map(domain => `
    <div class="blacklist-item" data-domain="${domain}">
      <span>${domain}</span>
      <button class="delete-blacklist-btn" data-domain="${domain}">✕</button>
    </div>
  `).join('');
  
  // Add delete listeners
  document.querySelectorAll('.delete-blacklist-btn').forEach(btn => {
    btn.addEventListener('click', () => removeFromBlacklist(btn.dataset.domain));
  });
}

// Add domain to blacklist
function addToBlacklist() {
  const input = document.getElementById('blacklistInput');
  if (!input) return;
  
  let domain = input.value.trim();
  if (!domain) return;
  
  // Clean up the domain - remove protocol and path
  domain = domain.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];
  
  // Get current blacklist
  const currentItems = Array.from(document.querySelectorAll('.blacklist-item'))
    .map(item => item.dataset.domain);
  
  // Check if already exists
  if (currentItems.includes(domain)) {
    alert('This domain is already in the blacklist!');
    return;
  }
  
  // Add to list
  currentItems.push(domain);
  renderBlacklist(currentItems);
  
  // Clear input
  input.value = '';
}

// Remove domain from blacklist
function removeFromBlacklist(domain) {
  const currentItems = Array.from(document.querySelectorAll('.blacklist-item'))
    .map(item => item.dataset.domain)
    .filter(d => d !== domain);
  
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
