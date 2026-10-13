import { useRef, useState } from 'react';
import { skills } from '../data.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function Skills() {
  const [active, setActive] = useState(skills[0].id);
  const tabRefs = useRef({});

  // Arrow keys move between tabs, following the WAI-ARIA tabs pattern.
  const onKeyDown = (e, i) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    const next = skills[(i + step + skills.length) % skills.length].id;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHead num="04" eyebrow="Skills" title="The toolkit," emphasis="sorted by what it's for." />
        <Reveal className="tabs">
          <div className="tabs__list" role="tablist">
            {skills.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => { tabRefs.current[s.id] = el; }}
                role="tab"
                id={`t-${s.id}`}
                aria-selected={active === s.id}
                aria-controls={`tab-${s.id}`}
                tabIndex={active === s.id ? 0 : -1}
                onClick={() => setActive(s.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {s.label}
              </button>
            ))}
          </div>
          {skills.map((s) => (
            <div
              key={s.id}
              className="tabs__panel"
              role="tabpanel"
              id={`tab-${s.id}`}
              aria-labelledby={`t-${s.id}`}
              hidden={active !== s.id}
            >
              <p className="tabs__lede">{s.lede}</p>
              <ul className="tags tags--lg">
                {s.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
