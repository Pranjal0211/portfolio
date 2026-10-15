import { useEffect } from 'react';

const COLORS = ['#E3B95A', '#F3D58A', '#FBE7B0', '#C8922B', '#E79AB5', '#F2A3C0'];

// Weighted mix of spark shapes; round dots are the most common.
const SHAPES = [
  ['dot', 0.42],
  ['star', 0.33],
  ['diamond', 0.15],
  ['ring', 0.1],
];

const MAX_ALIVE = 160; // hard cap on sparks on screen
const MIN_GAP_MS = 14; // shortest time between bursts
const MAX_BURST = 8; // most sparks one movement can shed

function pickShape() {
  let roll = Math.random();
  for (const [shape, weight] of SHAPES) {
    if ((roll -= weight) < 0) return shape;
  }
  return 'dot';
}

const rand = (min, max) => min + Math.random() * (max - min);

// Glitter that sheds from the mouse: the faster it moves, the more and
// bigger the sparks, spread along the path just travelled so quick swipes
// leave a streak. Sparks are plain DOM nodes, not React state, so a moving
// mouse never re-renders the app.
export default function SparkleTrail() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const layer = document.createElement('div');
    layer.className = 'sparkle-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);

    let alive = 0;
    let lastTime = 0;
    let lastX = null;
    let lastY = null;

    const spark = (x, y, speed) => {
      const el = document.createElement('span');
      el.className = `spark spark--${pickShape()}`;
      const size = rand(3, 6 + Math.min(speed, 3) * 2.2);
      const spread = 4 + speed * 5;
      el.style.left = `${x + rand(-spread, spread)}px`;
      el.style.top = `${y + 8 + rand(-spread, spread)}px`;
      el.style.setProperty('--size', `${size}px`);
      el.style.setProperty('--color', COLORS[Math.floor(Math.random() * COLORS.length)]);
      el.style.setProperty('--dx', `${rand(-1, 1) * (14 + speed * 10)}px`);
      el.style.setProperty('--dy', `${rand(12, 30 + speed * 14)}px`);
      el.style.setProperty('--spin', `${rand(-120, 120)}deg`);
      const life = rand(0.7, 1.15);
      el.style.setProperty('--life', `${life}s`);
      // animationend can fail to fire (an interrupted animation), so a timer
      // backs it up; whichever comes first frees the spark's slot.
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        el.remove();
        alive -= 1;
      };
      el.addEventListener('animationend', finish, { once: true });
      setTimeout(finish, life * 1000 + 250);
      layer.appendChild(el);
      alive += 1;
    };

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      const now = performance.now();
      if (lastX === null) {
        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;
        return;
      }
      const dt = now - lastTime;
      if (dt < MIN_GAP_MS) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.hypot(dx, dy);
      if (distance < 3) return;

      // px per ms: a slow drift is ~0.2, a quick swipe 2+.
      const speed = distance / dt;
      let count = Math.min(MAX_BURST, Math.round(1 + speed * 2.6));
      count = Math.min(count, MAX_ALIVE - alive);

      // Scatter the burst along the segment just travelled.
      for (let i = 0; i < count; i += 1) {
        const t = Math.random();
        spark(lastX + dx * t, lastY + dy * t, speed);
      }
      lastTime = now;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      layer.remove();
    };
  }, []);

  return null;
}
