import { useState } from 'react';
import { nav, profile } from '../data.js';
import { asset } from '../asset.js';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav" id="top">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">{profile.name.first}</a>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
        <nav className={`nav__links${open ? ' is-open' : ''}`} id="nav-links">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href={asset(profile.links.resume)} target="_blank" rel="noopener" onClick={close}>
            Résumé ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
