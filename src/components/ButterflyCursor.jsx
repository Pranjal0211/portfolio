import { useEffect, useId, useRef } from 'react';
import { butterflyCursor } from '../data.js';

// Swallowtail wing shapes for the right half of a 64x64 butterfly whose body
// runs down x=32. The left half is the same drawing mirrored.
const FOREWING =
  'M32.5 30 C33 22 38 12 47 5 C51 2 57 1 59.5 3.5 C61.5 6 60 12 57.5 17 C54.5 23 49 28.5 42 31 C38.5 32.2 35.5 32.6 32.5 32.8 Z';
const HINDWING =
  'M32.5 33.8 C37 33.2 44 33.2 49 35.5 C53.5 37.6 54.5 42 52 45.5 C50.6 47.5 48.4 48.6 47.2 50.5 C46.6 51.6 46.9 53.2 47.6 55.5 L49 60.5 C49.4 62.2 47.6 63 46.8 61.6 L43.6 55.6 C41.2 51.6 37 46.5 34 40.5 Z';
const VEINS =
  'M33 31 Q40 19 48 6 M33 31 Q45 20 56.5 5 M33 31.4 Q47 23 59 11 M33 31.8 Q46 28 56 21 M33 32.2 Q42 31 50 28 ' +
  'M34 34.4 Q43 35 51 38 M34 35 Q42 40 50 45 M34 35.5 Q40 44 46 51';

// Where the click lands: the butterfly's head, in its 48px box.
const HOT_X = 24;
const HOT_Y = 20;

function Wings({ fill, ink }) {
  const half = (
    <>
      <path d={FOREWING} fill={fill} stroke={ink} strokeWidth="2.1" strokeLinejoin="round" />
      <path d={HINDWING} fill={fill} stroke={ink} strokeWidth="2.1" strokeLinejoin="round" />
      <path d={VEINS} fill="none" stroke={ink} strokeWidth=".75" strokeLinecap="round" />
    </>
  );
  return (
    <>
      <g transform="translate(64 0) scale(-1 1)">{half}</g>
      <g>{half}</g>
    </>
  );
}

// A wing half: an SVG cropped to one side of the body so it can hinge in 3D.
function WingHalf({ side, color, gradientId }) {
  const fill = Array.isArray(color.fill) ? `url(#${gradientId})` : color.fill;
  return (
    <div className={`bf__wing bf__wing--${side}`}>
      <svg viewBox={side === 'l' ? '0 0 32 64' : '32 0 32 64'} preserveAspectRatio="none">
        {Array.isArray(color.fill) && (
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              {color.fill.map((stop, i) => (
                <stop key={stop} offset={i / (color.fill.length - 1)} stopColor={stop} />
              ))}
            </linearGradient>
          </defs>
        )}
        <Wings fill={fill} ink={color.ink} />
      </svg>
    </div>
  );
}

// A swallowtail butterfly that follows the mouse in place of the cursor.
// Its wings beat faster the faster the mouse moves, it leans into turns,
// and pressing the mouse makes it settle with its wings open (basking).
// Position and flap speed are written straight to the element's style, so
// moving the mouse never re-renders React.
export default function ButterflyCursor() {
  const ref = useRef(null);
  const uid = useId().replace(/:/g, '');
  const color =
    butterflyCursor.colors[butterflyCursor.selected] ?? Object.values(butterflyCursor.colors)[0];

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

    const root = document.documentElement;
    let x = 0;
    let y = 0;
    let lastX = null;
    let lastY = 0;
    let lastT = 0;
    let speed = 0;
    let tilt = 0;
    let queued = false;

    const place = () => {
      queued = false;
      el.style.transform = `translate3d(${x - HOT_X}px, ${y - HOT_Y}px, 0)`;
    };
    // A lazy flutter at rest; a fast swipe beats the wings about 4x faster.
    const setMotion = () => {
      el.style.setProperty('--flap', `${Math.max(0.11, 0.5 - speed * 0.22).toFixed(3)}s`);
      el.style.setProperty('--tilt', `${tilt.toFixed(1)}deg`);
    };

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      const now = performance.now();
      if (lastX !== null) {
        const dt = Math.max(1, now - lastT);
        const vx = (e.clientX - lastX) / dt;
        speed = speed * 0.8 + (Math.hypot(e.clientX - lastX, e.clientY - lastY) / dt) * 0.2;
        tilt = tilt * 0.8 + Math.max(-28, Math.min(28, vx * 14)) * 0.2;
        setMotion();
      }
      x = e.clientX;
      y = e.clientY;
      lastX = x;
      lastY = y;
      lastT = now;
      el.hidden = false;
      root.classList.add('has-butterfly');
      if (!queued) {
        queued = true;
        requestAnimationFrame(place);
      }
    };
    const onDown = (e) => {
      if (e.pointerType === 'mouse') el.classList.add('is-down');
    };
    const onUp = () => el.classList.remove('is-down');
    const onLeave = (e) => {
      if (!e.relatedTarget) el.hidden = true;
    };

    // Ease back to a lazy flutter and level flight once the mouse rests.
    const settle = setInterval(() => {
      speed *= 0.85;
      tilt *= 0.8;
      setMotion();
    }, 120);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('pointerout', onLeave);
    window.addEventListener('blur', onUp);
    return () => {
      clearInterval(settle);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerout', onLeave);
      window.removeEventListener('blur', onUp);
      root.classList.remove('has-butterfly');
    };
  }, []);

  return (
    <div className="bf" ref={ref} hidden aria-hidden="true">
      <div className="bf__pose">
        <div className="bf__top">
          <WingHalf side="l" color={color} gradientId={`${uid}-l`} />
          <WingHalf side="r" color={color} gradientId={`${uid}-r`} />
          <svg className="bf__body" viewBox="0 0 64 64">
            <path
              d="M31.3 26 Q28.5 18 26.2 14.5 M32.7 26 Q35.5 18 37.8 14.5"
              fill="none"
              stroke={color.ink}
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="26" cy="14.2" r="1.2" fill={color.ink} />
            <circle cx="38" cy="14.2" r="1.2" fill={color.ink} />
            <circle cx="32" cy="27" r="2.3" fill={color.ink} />
            <ellipse cx="32" cy="32.5" rx="2.4" ry="4.2" fill={color.ink} />
            <path d="M30.4 35.5 Q31.2 46 32 52 Q32.8 46 33.6 35.5 Z" fill={color.ink} />
          </svg>
        </div>
        <div className="bf__shadow"></div>
      </div>
    </div>
  );
}
