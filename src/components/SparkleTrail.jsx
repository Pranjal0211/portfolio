import { useEffect } from 'react';

const COLORS = ['#E3B95A', '#F3D58A', '#E79AB5', '#C8922B'];
const MIN_GAP_MS = 35; // at most ~28 sparkles a second
const MIN_DISTANCE = 10; // px the mouse must travel before the next one

// Four-point star, the same shape as the cursor.
const STAR =
  'M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z';

// Small sparkles that drift and fade behind the mouse. Sparkles are plain
// DOM nodes, not React state, so a fast-moving mouse never re-renders the app.
export default function SparkleTrail() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const layer = document.createElement('div');
    layer.className = 'sparkle-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);

    let lastTime = 0;
    let lastX = -100;
    let lastY = -100;

    const spawn = (x, y) => {
      const size = 8 + Math.random() * 10;
      const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      el.setAttribute('viewBox', '0 0 24 24');
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.classList.add('sparkle');
      el.style.left = `${x - size / 2}px`;
      el.style.top = `${y - size / 2}px`;
      el.style.setProperty('--dx', `${(Math.random() - 0.5) * 30}px`);
      el.style.setProperty('--dy', `${10 + Math.random() * 22}px`);
      el.style.setProperty('--spin', `${(Math.random() - 0.5) * 120}deg`);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', STAR);
      path.setAttribute('fill', COLORS[Math.floor(Math.random() * COLORS.length)]);
      el.appendChild(path);
      el.addEventListener('animationend', () => el.remove(), { once: true });
      layer.appendChild(el);
    };

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      const now = performance.now();
      const moved = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (now - lastTime < MIN_GAP_MS || moved < MIN_DISTANCE) return;
      lastTime = now;
      lastX = e.clientX;
      lastY = e.clientY;
      // Offset slightly so sparkles trail the star instead of covering it.
      spawn(e.clientX + 6, e.clientY + 10);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      layer.remove();
    };
  }, []);

  return null;
}
