# Dash — Notifications Demo

Tiny static demo app: top bar with a notifications bell button and dropdown panel.

Open `index.html` in a browser. Click the bell to open the notifications panel.

## Known bug

Clicking the bell doesn't show anything — the notifications panel is invisible. This
happens at **every viewport width**, not just narrow/mobile ones (the toolbar it sits in
is sized to its own content, so the clipping isn't viewport-dependent). The profile menu
(person icon) has the same problem.
