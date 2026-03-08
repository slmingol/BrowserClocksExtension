// Popular timezones with cities
const TIMEZONES = [
  { city: 'New York', timezone: 'America/New_York', country: 'USA' },
  { city: 'Los Angeles', timezone: 'America/Los_Angeles', country: 'USA' },
  { city: 'Chicago', timezone: 'America/Chicago', country: 'USA' },
  { city: 'Denver', timezone: 'America/Denver', country: 'USA' },
  { city: 'London', timezone: 'Europe/London', country: 'UK' },
  { city: 'Paris', timezone: 'Europe/Paris', country: 'France' },
  { city: 'Berlin', timezone: 'Europe/Berlin', country: 'Germany' },
  { city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan' },
  { city: 'Sydney', timezone: 'Australia/Sydney', country: 'Australia' },
  { city: 'Hong Kong', timezone: 'Asia/Hong_Kong', country: 'China' },
  { city: 'Singapore', timezone: 'Asia/Singapore', country: 'Singapore' },
  { city: 'Dubai', timezone: 'Asia/Dubai', country: 'UAE' },
  { city: 'Mumbai', timezone: 'Asia/Kolkata', country: 'India' },
  { city: 'Moscow', timezone: 'Europe/Moscow', country: 'Russia' },
  { city: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'Brazil' },
  { city: 'Mexico City', timezone: 'America/Mexico_City', country: 'Mexico' },
  { city: 'Toronto', timezone: 'America/Toronto', country: 'Canada' },
  { city: 'Vancouver', timezone: 'America/Vancouver', country: 'Canada' },
  { city: 'Auckland', timezone: 'Pacific/Auckland', country: 'New Zealand' },
  { city: 'Seoul', timezone: 'Asia/Seoul', country: 'South Korea' },
  { city: 'Bangkok', timezone: 'Asia/Bangkok', country: 'Thailand' },
  { city: 'Istanbul', timezone: 'Europe/Istanbul', country: 'Turkey' },
  { city: 'Amsterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands' },
  { city: 'Barcelona', timezone: 'Europe/Madrid', country: 'Spain' },
  { city: 'Rome', timezone: 'Europe/Rome', country: 'Italy' },
  { city: 'Zurich', timezone: 'Europe/Zurich', country: 'Switzerland' },
  { city: 'Stockholm', timezone: 'Europe/Stockholm', country: 'Sweden' },
  { city: 'Copenhagen', timezone: 'Europe/Copenhagen', country: 'Denmark' },
  { city: 'Dublin', timezone: 'Europe/Dublin', country: 'Ireland' },
  { city: 'Lisbon', timezone: 'Europe/Lisbon', country: 'Portugal' },
  { city: 'Athens', timezone: 'Europe/Athens', country: 'Greece' },
  { city: 'Cairo', timezone: 'Africa/Cairo', country: 'Egypt' },
  { city: 'Johannesburg', timezone: 'Africa/Johannesburg', country: 'South Africa' },
  { city: 'Lagos', timezone: 'Africa/Lagos', country: 'Nigeria' },
  { city: 'Shanghai', timezone: 'Asia/Shanghai', country: 'China' },
  { city: 'Beijing', timezone: 'Asia/Shanghai', country: 'China' },
  { city: 'Taipei', timezone: 'Asia/Taipei', country: 'Taiwan' },
  { city: 'Manila', timezone: 'Asia/Manila', country: 'Philippines' },
  { city: 'Jakarta', timezone: 'Asia/Jakarta', country: 'Indonesia' },
  { city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia' },
  { city: 'Ho Chi Minh', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam' },
  { city: 'Karachi', timezone: 'Asia/Karachi', country: 'Pakistan' },
  { city: 'Tehran', timezone: 'Asia/Tehran', country: 'Iran' },
  { city: 'Jerusalem', timezone: 'Asia/Jerusalem', country: 'Israel' },
  { city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina' },
  { city: 'Santiago', timezone: 'America/Santiago', country: 'Chile' },
  { city: 'Lima', timezone: 'America/Lima', country: 'Peru' },
  { city: 'Bogotá', timezone: 'America/Bogota', country: 'Colombia' },
  { city: 'Caracas', timezone: 'America/Caracas', country: 'Venezuela' },
  { city: 'Honolulu', timezone: 'Pacific/Honolulu', country: 'USA' },
  { city: 'Anchorage', timezone: 'America/Anchorage', country: 'USA' },
];

let clocks = [];
let updateInterval;

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  await loadClocks();
  renderClocks();
  startUpdating();
  
  // Event listeners
  document.getElementById('addClockBtn').addEventListener('click', openModal);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('settingsBtn').addEventListener('click', openSettings);
  document.getElementById('searchTimezone').addEventListener('input', filterTimezones);
  
  // Close modal on outside click
  document.getElementById('addModal').addEventListener('click', (e) => {
    if (e.target.id === 'addModal') {
      closeModal();
    }
  });
  
  // Populate timezone list
  renderTimezoneList(TIMEZONES);
});

// Load clocks from storage
async function loadClocks() {
  const result = await chrome.storage.sync.get(['clocks']);
  clocks = result.clocks || [
    { city: 'New York', timezone: 'America/New_York', country: 'USA' },
    { city: 'London', timezone: 'Europe/London', country: 'UK' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan' }
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
  
  // Add delete event listeners
  document.querySelectorAll('.delete-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => deleteClock(index));
  });
}

// Create clock HTML element
function createClockElement(clock, time, index) {
  return `
    <div class="clock-item" data-index="${index}">
      <div class="clock-info">
        <div class="clock-city">${clock.city}, ${clock.country}</div>
        <div class="clock-timezone">${clock.timezone}</div>
        <div class="clock-date">${time.date}</div>
      </div>
      <div class="clock-display">
        <div class="clock-time">${time.time}</div>
      </div>
      <div class="clock-actions">
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
