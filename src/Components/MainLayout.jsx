import React from "react";
import { Outlet, NavLink } from "react-router-dom";
export const MainLayout = () => {
  // Styling for nav bar
  const active = {
    borderBottom: "3px solid rgba(25,135,84)",
  };

  return (
    <div className="container d-flex align-items-center justify-content-center flex-column pt-5">
      <div className="heading pb-5">
        <h1 className="text-center text-success pb-1">Box Office</h1>
        <p>Are you looking for a movie or an actor?</p>
      </div>

      <nav className="pb-4 d-flex justify-content-between">
        <NavLink
          style={({ isActive }) => (isActive ? active : null)}
          className="text-decoration-none text-success "
          to="/box-office/"
          end
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? active : null)}
          className="text-decoration-none text-success"
          to="/box-office/starred"
        >
          Starred
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
