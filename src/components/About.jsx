import Reveal from './Reveal.jsx';
import { about } from '../data.js';

// Turns "plain **highlighted** plain" into text with <strong> highlights.
const highlight = (text) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <Reveal as="h2" className="statement">
          {about.statement.map((part, i) => (part.em ? <em key={i}>{part.text}</em> : part.text))}
        </Reveal>
        <p className="about__current">{about.current}</p>
        <Reveal className="about__body">
          {about.paragraphs.map((p) => <p key={p}>{highlight(p)}</p>)}
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
