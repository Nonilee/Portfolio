import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import config from '../config.js';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the viewport grows past tablet width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__bar container">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">N.</span>
          <span className="brand__name">{config.siteName}</span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`nav-toggle__bar ${open ? 'is-open' : ''}`} />
        </button>

        <nav className={`site-nav ${open ? 'site-nav--open' : ''}`} aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="btn btn--sm btn--primary nav-cta" onClick={() => setOpen(false)}>
            Start a project
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
