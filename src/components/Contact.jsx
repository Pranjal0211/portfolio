import { profile } from '../data.js';
import { asset } from '../asset.js';

export default function Contact() {
  const { email, links } = profile;
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <p className="eyebrow eyebrow--light">Say hello</p>
        <h2 className="contact__title">What should we <em>build?</em></h2>
        <a className="contact__email" href={`mailto:${email}`}>{email}</a>
        <div className="contact__links">
          <a href={links.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href={links.github} target="_blank" rel="noopener">GitHub ↗</a>
          <a href={asset(links.resume)} target="_blank" rel="noopener">Résumé ↗</a>
        </div>
      </div>
    </section>
  );
}
