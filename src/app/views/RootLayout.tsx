import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from '@/shared/components/Footer';
import { useUiStore } from '@/shared/store/uiStore';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Exploration', to: '/exploration' },
  { label: 'About', to: '/about' },
];

export const RootLayout = () => {
  const toggleDenseLayout = useUiStore((state) => state.toggleDenseLayout);
  const denseLayout = useUiStore((state) => state.denseLayout);

  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="container nav-content">
          <NavLink to="/" className="brand">Laboratory</NavLink>
          <nav className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button className="chip-button" onClick={toggleDenseLayout} type="button">
            {denseLayout ? 'Comfort Layout' : 'Dense Layout'}
          </button>
        </div>
      </header>
      <main className="main-area">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
