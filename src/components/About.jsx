import Reveal from './Reveal.jsx';
import { about } from '../data.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <p className="eyebrow">Hello</p>
        <Reveal as="h2" className="statement">
          {about.statement.map((part, i) => (part.em ? <em key={i}>{part.text}</em> : part.text))}
        </Reveal>
        <Reveal className="about__body">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <p className="handnote">{about.handnote}</p>
        </Reveal>
        <Reveal as="ul" className="stats">
          {about.stats.map((s) => (
            <li key={s.label}>
              <span className="stats__num">{s.num}</span>
              <span className="stats__label">{s.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
