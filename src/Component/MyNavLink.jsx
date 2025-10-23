// src/components/MyNavLink.jsx
import { NavLink } from "react-router";

export default function MyNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-white font-bold bg-[#2a7d2e] pb-1"
          : "hover:text-green-600 transition"
      }
    >
      {children}
    </NavLink>
  );
}
