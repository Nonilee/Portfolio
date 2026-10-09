import { NavLink } from 'react-router-dom';
import config from '../config.js';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">N.</span>
            <span className="brand__name">{config.siteName}</span>
          </p>
          <p className="site-footer__tagline">{config.tagline}</p>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Site</p>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Contact</p>
          <ul>
            <li><a href={`mailto:${config.email}`}>{config.email}</a></li>
            <li><a href={`https://wa.me/${config.whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li>{config.location}</li>
          </ul>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Elsewhere</p>
          <ul>
            {config.socials.github && (
               <li><a href={config.socials.github} target="_blank" rel="noreferrer">GitHub</a></li>
            )}
            {config.socials.linkedin && (
             <li><a href={config.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            )}
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {year} {config.siteName}. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
