import { useState } from 'react';
import { projectFilters, projects } from '../data.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function Work() {
  const [filter, setFilter] = useState('all');
  const visible = projects.filter((p) => filter === 'all' || p.cats.includes(filter));

  return (
    <section className="section section--tint" id="work">
      <div className="wrap">
        <SectionHead num="01" eyebrow="Selected work" title="Things I've built," emphasis="and who they're for." />

        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              className={`chip${filter === f.id ? ' is-active' : ''}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="cards">
          {visible.map((p) => (
            <Reveal as="article" className="card" key={p.title}>
              <div className="card__media" style={{ '--tint': p.tint }}>
                <span>{p.motto}</span>
              </div>
              <p className="card__cat">{p.meta}</p>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__hook">{p.hook}</p>
              <ul className="tags">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <a href={p.href} className="card__link" target="_blank" rel="noopener">GitHub →</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
