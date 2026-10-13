import { profile } from '../data.js';
import { asset } from '../asset.js';

// The photo is one full-bleed layer. The name is a second layer split
// into two words, with an empty column in the middle so the letters sit
// on either side of the person rather than across her face.
export default function Hero() {
  const { hero, name, tagline, links } = profile;
  return (
    <section className="hero">
      <img
        className="hero__photo"
        src={asset(hero.src)}
        alt={hero.alt}
        width={hero.width}
        height={hero.height}
        fetchPriority="high"
      />
      <div className="hero__shade" aria-hidden="true"></div>
      <h1 className="hero__name">
        <span className="hero__first">{name.first}</span>
        <span className="hero__last">{name.last}</span>
      </h1>
      <div className="hero__meta">
        <p className="hero__tagline">{tagline}</p>
        <div className="hero__ctas">
          <a href="#work" className="btn btn--solid">Work <span aria-hidden="true">↓</span></a>
          <a href="#skills" className="btn btn--ghost">Skills <span aria-hidden="true">→</span></a>
          <a href={asset(links.resume)} className="btn btn--ghost" target="_blank" rel="noopener">
            Résumé <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <a href="#about" className="hero__scroll">Scroll <span aria-hidden="true">↓</span></a>
    </section>
  );
}
