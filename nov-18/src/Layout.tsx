import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <h1>My App</h1>

      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About me
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}