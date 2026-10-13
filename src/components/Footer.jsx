import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>© {new Date().getFullYear()} {profile.name.first} {profile.name.last}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
