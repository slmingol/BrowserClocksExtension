// BrowserClocks Persistent Toolbar Script
(function() {
  'use strict';
  
  let toolbar = null;
  let clocks = [];
  let settings = {};
  let updateInterval = null;
  
  // Initialize toolbar
  async function init() {
    // Load settings and clocks
    const data = await chrome.storage.sync.get(['clocks', 'settings']);
    clocks = data.clocks || [
      { city: 'New York', timezone: 'America/New_York', country: 'USA' },
      { city: 'London', timezone: 'Europe/London', country: 'UK' },
      { city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan' }
    ];
    
    settings = data.settings || {
      toolbarEnabled: true,
      toolbarPosition: 'top',
      toolbarMinimized: false,
      toolbarBlacklist: [],
      timeFormat: '12',
      showSeconds: true
    };
    
    // Check if current domain is blacklisted
    const currentDomain = window.location.hostname;
    const isBlacklisted = settings.toolbarBlacklist?.some(domain => {
      // Match exact domain or subdomain
      return currentDomain === domain || currentDomain.endsWith('.' + domain);
    });
    
    // Only create toolbar if enabled and not blacklisted
    if (settings.toolbarEnabled && !isBlacklisted) {
      createToolbar();
      startUpdating();
    }
    
    // Listen for settings changes
    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === 'sync') {
        if (changes.clocks) {
          clocks = changes.clocks.newValue || [];
          updateClocks();
        }
        if (changes.settings) {
          settings = changes.settings.newValue || settings;
          updateToolbarSettings();
        }
      }
    });
  }
  
  // Create the toolbar element
  function createToolbar() {
    // Don't create if already exists
    if (document.getElementById('browserclocks-toolbar')) {
      return;
    }
    
    toolbar = document.createElement('div');
    toolbar.id = 'browserclocks-toolbar';
    toolbar.className = `position-${settings.toolbarPosition}`;
    
    if (settings.toolbarMinimized) {
      toolbar.classList.add('minimized');
    }
    
    toolbar.innerHTML = `
      <div class="bc-logo" title="Click to expand/minimize">
        🕐 <span>BrowserClocks</span>
      </div>
      <div class="bc-clocks"></div>
      <div class="bc-controls">
        <button class="bc-btn bc-toggle" title="Minimize/Expand">−</button>
        <button class="bc-btn" title="Hide toolbar">✕</button>
      </div>
    `;
    
    // Add event listeners
    toolbar.querySelector('.bc-logo').addEventListener('click', toggleMinimize);
    toolbar.querySelector('.bc-toggle').addEventListener('click', toggleMinimize);
    toolbar.querySelector('.bc-controls .bc-btn:last-child').addEventListener('click', hideToolbar);
    
    document.body.appendChild(toolbar);
    updateClocks();
  }
  
  // Convert country code to flag emoji
  function getFlagEmoji(countryCode) {
    if (!countryCode) return '';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }
  
  // Update clock displays
  function updateClocks() {
    if (!toolbar) return;
    
    const clocksContainer = toolbar.querySelector('.bc-clocks');
    if (!clocksContainer) return;
    
    clocksContainer.innerHTML = clocks.map(clock => {
      const timeData = getTimeForTimezone(clock.timezone);
      const flag = clock.countryCode ? getFlagEmoji(clock.countryCode) : '';
      const displayName = clock.alias || clock.city;
      
      return `
        <div class="bc-clock">
          <div class="bc-clock-city">
            ${flag ? `<span class="bc-flag">${flag}</span>` : ''}
            ${displayName}
          </div>
          <div class="bc-clock-day">${timeData.day}</div>
          <div class="bc-clock-time">${timeData.time}</div>
        </div>
      `;
    }).join('');
  }
  
  // Get formatted time for timezone
  function getTimeForTimezone(timezone) {
    const now = new Date();
    const timeOptions = {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: settings.timeFormat === '12'
    };
    
    if (settings.showSeconds) {
      timeOptions.second = '2-digit';
    }
    
    const dayOptions = {
      timeZone: timezone,
      weekday: 'short'
    };
    
    try {
      const time = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
      const day = new Intl.DateTimeFormat('en-US', dayOptions).format(now);
      return { time, day };
    } catch (e) {
      return { time: 'Invalid TZ', day: '' };
    }
  }
  
  // Start updating clocks
  function startUpdating() {
    if (updateInterval) {
      clearInterval(updateInterval);
    }
    updateInterval = setInterval(updateClockTimes, 1000);
  }
  
  // Update just the time values (don't rebuild DOM)
  function updateClockTimes() {
    if (!toolbar) return;
    
    const clockElements = toolbar.querySelectorAll('.bc-clock');
    clockElements.forEach((el, index) => {
      if (clocks[index]) {
        const timeData = getTimeForTimezone(clocks[index].timezone);
        const timeEl = el.querySelector('.bc-clock-time');
        const dayEl = el.querySelector('.bc-clock-day');
        if (timeEl) {
          timeEl.textContent = timeData.time;
        }
        if (dayEl) {
          dayEl.textContent = timeData.day;
        }
      }
    });
  }
  
  // Toggle minimize state
  function toggleMinimize() {
    if (!toolbar) return;
    
    toolbar.classList.toggle('minimized');
    settings.toolbarMinimized = toolbar.classList.contains('minimized');
    
    // Update toggle button
    const toggleBtn = toolbar.querySelector('.bc-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = settings.toolbarMinimized ? '+' : '−';
    }
    
    // Save state
    chrome.storage.sync.set({ settings });
  }
  
  // Hide toolbar
  function hideToolbar() {
    if (toolbar) {
      toolbar.classList.add('hidden');
      setTimeout(() => {
        toolbar.remove();
        toolbar = null;
        if (updateInterval) {
          clearInterval(updateInterval);
        }
      }, 300);
    }
    
    // Update settings
    settings.toolbarEnabled = false;
    chrome.storage.sync.set({ settings });
  }
  
  // Update toolbar settings (position, etc.)
  function updateToolbarSettings() {
    // Check if current domain is blacklisted
    const currentDomain = window.location.hostname;
    const isBlacklisted = settings.toolbarBlacklist?.some(domain => {
      return currentDomain === domain || currentDomain.endsWith('.' + domain);
    });
    
    if (!toolbar && settings.toolbarEnabled && !isBlacklisted) {
      createToolbar();
      startUpdating();
      return;
    }
    
    if (toolbar) {
      // Update position
      toolbar.className = `position-${settings.toolbarPosition}`;
      if (settings.toolbarMinimized) {
        toolbar.classList.add('minimized');
      }
      
      // Update toggle button
      const toggleBtn = toolbar.querySelector('.bc-toggle');
      if (toggleBtn) {
        toggleBtn.textContent = settings.toolbarMinimized ? '+' : '−';
      }
      
      updateClocks();
    }
    
    // Hide toolbar if disabled or blacklisted
    if ((!settings.toolbarEnabled || isBlacklisted) && toolbar) {
      hideToolbar();
    }
  }
  
  // Listen for messages from popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'updateClocks') {
      chrome.storage.sync.get(['clocks'], (result) => {
        clocks = result.clocks || [];
        updateClocks();
      });
    }
  });
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Cleanup on page unload
  window.addEventListener('unload', () => {
    if (updateInterval) {
      clearInterval(updateInterval);
    }
  });
})();
