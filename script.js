const toggle = document.getElementById('notif-toggle');
const panel = document.getElementById('notif-panel');

// The panel used to sit inside .toolbar, whose overflow:hidden (needed for
// the decorative glow mask) also clipped the panel itself. Moving it to be
// a direct child of <body> and positioning it with `fixed` + JS-computed
// coordinates lets it escape that ancestor without touching the mask.
document.body.appendChild(panel);

function positionPanel() {
  const btnRect = toggle.getBoundingClientRect();
  const margin = 8;
  let left = btnRect.right - panel.offsetWidth;
  left = Math.max(margin, Math.min(left, window.innerWidth - panel.offsetWidth - margin));
  panel.style.top = `${btnRect.bottom + margin}px`;
  panel.style.left = `${left}px`;
}

toggle.addEventListener('click', () => {
  panel.hidden = !panel.hidden;
  if (!panel.hidden) positionPanel();
});

window.addEventListener('resize', () => {
  if (!panel.hidden) positionPanel();
});

document.addEventListener('click', (event) => {
  if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) {
    panel.hidden = true;
  }
});
