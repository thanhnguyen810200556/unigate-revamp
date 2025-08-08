import { NavLink } from "react-router-dom";

function getNavLinkClassName(isActive) {
  const base = "px-4 py-2 rounded font-medium transition-colors";
  const active = "bg-[#0056B3] text-white";
  const inactive = "text-gray-700 hover:bg-[#0056B3] hover:text-white";
  return isActive ? `${base} ${active}` : `${base} ${inactive}`;
}

function Navigation() {
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex space-x-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => getNavLinkClassName(isActive)}
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) => getNavLinkClassName(isActive)}
          >
            Tin tức
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => getNavLinkClassName(isActive)}
          >
            Liên hệ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
