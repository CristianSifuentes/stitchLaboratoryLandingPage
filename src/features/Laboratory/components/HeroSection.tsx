import { Link } from 'react-router-dom';

export const HeroSection = () => (
  <section className="hero">
    <div className="container hero-inner">
      <p className="eyebrow">Status: Online</p>
      <h1>Welcome to the Laboratory</h1>
      <p className="hero-copy">
        A digital garden for evolving thought, code snippets, and unfinished symphonies. Designed with
        high-fidelity UX and a systems-driven architecture.
      </p>
      <div className="hero-actions">
        <Link className="primary-btn" to="/exploration">
          Explore the Lab
        </Link>
        <Link className="secondary-btn" to="/about">
          Read Manifesto
        </Link>
      </div>
    </div>
  </section>
);
