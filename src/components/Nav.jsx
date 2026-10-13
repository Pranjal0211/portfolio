import { useState } from 'react';
import { nav, profile } from '../data.js';
import { asset } from '../asset.js';
import useActiveSection from '../hooks/useActiveSection.js';

const sectionIds = nav.map((item) => item.href.slice(1));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const active = useActiveSection(sectionIds);

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
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? 'is-active' : undefined}
              aria-current={active === item.href.slice(1) ? 'location' : undefined}
              onClick={close}
            >
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
