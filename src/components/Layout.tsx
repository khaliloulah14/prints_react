import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/all-products">Produits</Link> | <Link to="/about">À propos</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2026</footer>
    </>
  );
};

export default Layout;