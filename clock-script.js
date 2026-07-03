// Define time zones with their UTC offsets
const timeZones = [
  { id: 'ny-time', name: 'America/New_York' },
  { id: 'london-time', name: 'Europe/London' },
  { id: 'paris-time', name: 'Europe/Paris' },
  { id: 'dubai-time', name: 'Asia/Dubai' },
  { id: 'tokyo-time', name: 'Asia/Tokyo' },
  { id: 'sydney-time', name: 'Australia/Sydney' },
  { id: 'la-time', name: 'America/Los_Angeles' },
  { id: 'singapore-time', name: 'Asia/Singapore' }
];

// Function to format time with leading zeros
function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Function to get time in a specific timezone
function getTimeInTimeZone(timeZoneName) {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timeZoneName,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  return formatter.format(date);
}

// Function to update all clocks
function updateClocks() {
  // Update each timezone clock
  timeZones.forEach(tz => {
    const timeElement = document.getElementById(tz.id);
    if (timeElement) {
      timeElement.textContent = getTimeInTimeZone(tz.name);
    }
  });

  // Update UTC time
  const utcElement = document.getElementById('utc-time');
  if (utcElement) {
    const now = new Date();
    utcElement.textContent = formatTime(now);
  }
}

// Update clocks immediately and then every second
updateClocks();
setInterval(updateClocks, 1000);

// Optional: Add animation on page load
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.clock-card');
  cards.forEach((card, index) => {
    card.style.animation = `slideIn 0.5s ease-out ${index * 0.1}s both`;
  });
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);