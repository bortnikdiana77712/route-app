import { NavLink, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/posts"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Posts
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>My Route App</p>
      </footer>
    </div>
  );
}
