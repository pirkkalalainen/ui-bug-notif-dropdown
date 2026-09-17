const toggle = document.getElementById('notif-toggle');
const panel = document.getElementById('notif-panel');

function positionPanel() {
  const rect = toggle.getBoundingClientRect();
  panel.style.top = `${rect.bottom + 8}px`;
  panel.style.left = `${rect.right - panel.offsetWidth}px`;
}

function openPanel() {
  panel.hidden = false;
  positionPanel();
  toggle.setAttribute('aria-expanded', 'true');
}

function closePanel({ focusToggle = false } = {}) {
  panel.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  if (focusToggle) {
    toggle.focus();
  }
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
