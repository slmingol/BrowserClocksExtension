// Popular timezones with cities
const TIMEZONES = [
  { city: 'New York', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Los Angeles', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Chicago', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Denver', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  { city: 'London', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Paris', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR' },
  { city: 'Berlin', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' },
  { city: 'Sydney', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU' },
  { city: 'Hong Kong', timezone: 'Asia/Hong_Kong', country: 'China', countryCode: 'HK' },
  { city: 'Singapore', timezone: 'Asia/Singapore', country: 'Singapore', countryCode: 'SG' },
  { city: 'Dubai', timezone: 'Asia/Dubai', country: 'UAE', countryCode: 'AE' },
  { city: 'Mumbai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Moscow', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU' },
  { city: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR' },
  { city: 'Mexico City', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX' },
  { city: 'Toronto', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA' },
  { city: 'Vancouver', timezone: 'America/Vancouver', country: 'Canada', countryCode: 'CA' },
  { city: 'Auckland', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ' },
  { city: 'Seoul', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR' },
  { city: 'Bangkok', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH' },
  { city: 'Istanbul', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR' },
  { city: 'Amsterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL' },
  { city: 'Barcelona', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES' },
  { city: 'Rome', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Zurich', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH' },
  { city: 'Stockholm', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE' },
  { city: 'Copenhagen', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK' },
  { city: 'Dublin', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE' },
  { city: 'Lisbon', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT' },
  { city: 'Athens', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR' },
  { city: 'Cairo', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG' },
  { city: 'Johannesburg', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA' },
  { city: 'Lagos', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG' },
  { city: 'Shanghai', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Beijing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Taipei', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW' },
  { city: 'Manila', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH' },
  { city: 'Jakarta', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID' },
  { city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY' },
  { city: 'Ho Chi Minh', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN' },
  { city: 'Karachi', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK' },
  { city: 'Tehran', timezone: 'Asia/Tehran', country: 'Iran', countryCode: 'IR' },
  { city: 'Jerusalem', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL' },
  { city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR' },
  { city: 'Santiago', timezone: 'America/Santiago', country: 'Chile', countryCode: 'CL' },
  { city: 'Lima', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE' },
  { city: 'Bogotá', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO' },
  { city: 'Caracas', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE' },
  { city: 'Honolulu', timezone: 'Pacific/Honolulu', country: 'USA', countryCode: 'US' },
  { city: 'Anchorage', timezone: 'America/Anchorage', country: 'USA', countryCode: 'US' },
];

let clocks = [];
let updateInterval;

// Convert country code to flag emoji
function getFlagEmoji(countryCode) {
  if (!countryCode) return '';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  await loadClocks();
  renderClocks();
  startUpdating();
  
  // Event listeners
  document.getElementById('addClockBtn').addEventListener('click', openModal);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('closeEditModal').addEventListener('click', closeEditModal);
  document.getElementById('cancelAliasBtn').addEventListener('click', closeEditModal);
  document.getElementById('settingsBtn').addEventListener('click', openSettings);
  document.getElementById('searchTimezone').addEventListener('input', filterTimezones);
  
  // Close modal on outside click
  document.getElementById('addModal').addEventListener('click', (e) => {
    if (e.target.id === 'addModal') {
      closeModal();
    }
  });
  
  document.getElementById('editModal').addEventListener('click', (e) => {
    if (e.target.id === 'editModal') {
      closeEditModal();
    }
  });
  
  // Enter key to save alias
  document.getElementById('aliasInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const index = parseInt(e.target.dataset.index);
      saveAlias(index);
    }
  });
  
  // Populate timezone list
  renderTimezoneList(TIMEZONES);
});

// Load clocks from storage
async function loadClocks() {
  const result = await chrome.storage.sync.get(['clocks']);
  clocks = result.clocks || [
    { city: 'New York', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
    { city: 'London', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' }
  ];
}

// Save clocks to storage
async function saveClocks() {
  await chrome.storage.sync.set({ clocks });
}

// Render all clocks
function renderClocks() {
  const container = document.getElementById('clocksList');
  
  if (clocks.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No clocks added yet</p>
        <p>Click "+ Add Timezone" to get started</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = clocks.map((clock, index) => {
    const time = getTimeForTimezone(clock.timezone);
    return createClockElement(clock, time, index);
  }).join('');
  
  // Add delete and edit event listeners
  document.querySelectorAll('.delete-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => deleteClock(index));
  });
  document.querySelectorAll('.edit-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => openEditModal(index));
  });
}

// Create clock HTML element
function createClockElement(clock, time, index) {
  const flag = clock.countryCode ? getFlagEmoji(clock.countryCode) : '';
  const displayName = clock.alias || clock.city;
  
  return `
    <div class="clock-item" data-index="${index}">
      <div class="clock-info">
        <div class="clock-city">
          ${flag ? `<span class="flag-emoji">${flag}</span>` : ''}
          ${displayName}, ${clock.country}
        </div>
        <div class="clock-timezone">${clock.timezone}</div>
        <div class="clock-date">${time.date}</div>
      </div>
      <div class="clock-display">
        <div class="clock-time">${time.time}</div>
      </div>
      <div class="clock-actions">
        <button class="edit-btn" title="Edit alias">✏️</button>
        <button class="delete-btn" title="Remove">🗑️</button>
      </div>
    </div>
  `;
}

// Get formatted time for a timezone
function getTimeForTimezone(timezone) {
  const now = new Date();
  
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  return {
    time: timeFormatter.format(now),
    date: dateFormatter.format(now)
  };
}

// Update all clock times
function updateClockTimes() {
  clocks.forEach((clock, index) => {
    const time = getTimeForTimezone(clock.timezone);
    const clockElement = document.querySelector(`[data-index="${index}"]`);
    if (clockElement) {
      clockElement.querySelector('.clock-time').textContent = time.time;
      clockElement.querySelector('.clock-date').textContent = time.date;
    }
  });
}

// Start updating clocks every second
function startUpdating() {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  updateInterval = setInterval(updateClockTimes, 1000);
}

// Delete a clock
async function deleteClock(index) {
  clocks.splice(index, 1);
  await saveClocks();
  renderClocks();
}

// Add a clock
async function addClock(timezone) {
  // Check if already added
  if (clocks.some(c => c.timezone === timezone.timezone)) {
    alert('This timezone is already added!');
    return;
  }
  
  clocks.push(timezone);
  await saveClocks();
  renderClocks();
  closeModal();
}

// Open add timezone modal
function openModal() {
  document.getElementById('addModal').classList.remove('hidden');
  document.getElementById('searchTimezone').value = '';
  document.getElementById('searchTimezone').focus();
  renderTimezoneList(TIMEZONES);
}

// Close modal
function closeModal() {
  document.getElementById('addModal').classList.add('hidden');
}

// Open edit alias modal
function openEditModal(index) {
  const clock = clocks[index];
  const modal = document.getElementById('editModal');
  const input = document.getElementById('aliasInput');
  const savebtn = document.getElementById('saveAliasBtn');
  
  input.value = clock.alias || clock.city;
  input.dataset.index = index;
  modal.classList.remove('hidden');
  input.focus();
  input.select();
  
  // Remove old listener and add new one
  const newSaveBtn = savebtn.cloneNode(true);
  savebtn.parentNode.replaceChild(newSaveBtn, savebtn);
  newSaveBtn.addEventListener('click', () => saveAlias(index));
}

// Close edit modal
function closeEditModal() {
  document.getElementById('editModal').classList.add('hidden');
}

// Save alias
async function saveAlias(index) {
  const input = document.getElementById('aliasInput');
  const alias = input.value.trim();
  
  if (alias && alias !== clocks[index].city) {
    clocks[index].alias = alias;
  } else {
    delete clocks[index].alias;
  }
  
  await saveClocks();
  renderClocks();
  closeEditModal();
  
  // Notify toolbar to update
  const tabs = await chrome.tabs.query({});
  tabs.forEach(tab => {
    chrome.tabs.sendMessage(tab.id, { action: 'updateClocks' }).catch(() => {});
  });
}

// Render timezone list
function renderTimezoneList(timezones) {
  const container = document.getElementById('timezoneList');
  
  container.innerHTML = timezones.map(tz => {
    const offset = getTimezoneOffset(tz.timezone);
    return `
      <div class="timezone-item" data-timezone='${JSON.stringify(tz)}'>
        <div class="timezone-name">${tz.city}, ${tz.country}</div>
        <div class="timezone-offset">${tz.timezone} (${offset})</div>
      </div>
    `;
  }).join('');
  
  // Add click listeners
  document.querySelectorAll('.timezone-item').forEach(item => {
    item.addEventListener('click', () => {
      const tz = JSON.parse(item.dataset.timezone);
      addClock(tz);
    });
  });
}

// Get timezone offset
function getTimezoneOffset(timezone) {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    timeZoneName: 'short'
  });
  
  const parts = formatter.formatToParts(now);
  const tzName = parts.find(part => part.type === 'timeZoneName');
  return tzName ? tzName.value : '';
}

// Filter timezones
function filterTimezones(e) {
  const query = e.target.value.toLowerCase();
  const filtered = TIMEZONES.filter(tz => 
    tz.city.toLowerCase().includes(query) ||
    tz.country.toLowerCase().includes(query) ||
    tz.timezone.toLowerCase().includes(query)
  );
  renderTimezoneList(filtered);
}

// Open settings page
function openSettings() {
  chrome.runtime.openOptionsPage();
}

// Cleanup on unload
window.addEventListener('unload', () => {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
});
