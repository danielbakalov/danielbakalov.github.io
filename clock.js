(function () {
  'use strict';

  var el = document.getElementById('clock-time');
  if (!el || !window.Intl || !Intl.DateTimeFormat) return;

  var fmt;
  try {
    fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  } catch (err) {
    return;
  }

  function tick() {
    var now = new Date();
    el.textContent = fmt.format(now);
    el.dateTime = now.toISOString();
  }

  tick();
  setInterval(tick, 1000);
})();
