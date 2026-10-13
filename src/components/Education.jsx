import { education } from '../data.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function Education() {
  return (
    <section className="section section--tint" id="education">
      <div className="wrap">
        <SectionHead num="03" eyebrow="Study" title="Where I learned," emphasis="and what I keep learning." />
        <Reveal className="edu">
          <div className="edu__main">
            <h3 className="edu__degree">{education.degree}</h3>
            <p className="edu__school">{education.school}</p>
            <dl className="edu__facts">
              {education.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="edu__courses">
            {education.lists.map((list) => (
              <div key={list.title}>
                <p className="eyebrow">{list.title}</p>
                <ul className="course-list">
                  {list.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
