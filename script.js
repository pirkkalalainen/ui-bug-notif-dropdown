function setupDropdown(toggleId, panelId) {
  const toggle = document.getElementById(toggleId);
  const panel = document.getElementById(panelId);

  // Move the panel out of the decorative .toolbar's DOM subtree entirely so
  // it can't be clipped by .toolbar's overflow:hidden or trapped by its
  // transform (which also makes it a containing block for position:fixed
  // descendants). Position is then computed from the toggle's live rect.
  document.body.appendChild(panel);

  function positionPanel() {
    const rect = toggle.getBoundingClientRect();
    panel.style.top = (rect.bottom + 8) + 'px';
    panel.style.right = (window.innerWidth - rect.right) + 'px';
  }

  function openPanel() {
    positionPanel();
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closePanel({ focusToggle = false } = {}) {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (focusToggle) toggle.focus();
  }

  toggle.addEventListener('click', () => {
    if (panel.hidden) {
      openPanel();
    } else {
      closePanel();
    }
  });

  document.addEventListener('click', (event) => {
    if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) {
      closePanel();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      closePanel({ focusToggle: true });
    }
  });

  window.addEventListener('resize', () => {
    if (!panel.hidden) positionPanel();
  });
}

setupDropdown('notif-toggle', 'notif-panel');
setupDropdown('profile-toggle', 'profile-panel');
