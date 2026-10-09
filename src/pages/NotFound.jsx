import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="This page doesn't exist." path="/404" />
      <section className="section not-found">
        <div className="container">
          <p className="eyebrow-plain">404</p>
          <h1>That page doesn't exist.</h1>
          <p>It may have moved, or the link is off.</p>
          <NavLink to="/" className="btn btn--primary">Back to home</NavLink>
        </div>
      </section>
    </>
  );
}

export default NotFound;
