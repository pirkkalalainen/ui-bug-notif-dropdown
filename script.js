const toggle = document.getElementById('notif-toggle');
const panel = document.getElementById('notif-panel');

toggle.addEventListener('click', () => {
  panel.hidden = !panel.hidden;
});

document.addEventListener('click', (event) => {
  if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) {
    panel.hidden = true;
  }
});
