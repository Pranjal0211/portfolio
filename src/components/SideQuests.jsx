import { sideQuests } from '../data.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function SideQuests() {
  return (
    <section className="section section--tint" id="beyond">
      <div className="wrap">
        <SectionHead num="05" eyebrow="Side quests" title="Things I built" emphasis="just to see if I could." />
        <div className="beyond">
          {sideQuests.map((q) => (
            <Reveal as="a" className="polaroid" key={q.href} href={q.href} target="_blank" rel="noopener" style={{ '--rot': q.rot }}>
              <div className="polaroid__img" style={{ '--tint': q.tint }}>
                <span>{q.glyph}</span>
              </div>
              <p className="polaroid__cap">{q.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
