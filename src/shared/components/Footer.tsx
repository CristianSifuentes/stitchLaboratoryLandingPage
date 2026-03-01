import { NavLink } from 'react-router-dom';

export const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div>
        <h4 className="footer-title">Laboratory</h4>
        <p className="muted">A digital space for unfinished ideas and polished experiments.</p>
      </div>
      <div>
        <h4 className="footer-title">Navigate</h4>
        <div className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/exploration">Exploration</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
      <div>
        <h4 className="footer-title">Status</h4>
        <p className="muted">Systems operational • 2026 Edition</p>
      </div>
    </div>
  </footer>
);
