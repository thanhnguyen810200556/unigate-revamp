import { sidebarItems } from "../../../constants/sidebarItems";
import { iconMap } from "../../../utilities/iconUtils";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../ui/Button";

function getNavLinkClassName(isActive) {
  const base = "flex items-center gap-3 px-4 py-2 transition-colors";
  const active = "text-white font-semibold text-[16px]";
  const inactive = "text-white/60 text-[14px]";
  return isActive ? `${base} ${active}` : `${base} ${inactive}`;
}

function SidebarNav() {
  return (
    <nav>
      <ul className="ml-4 mt-5 flex w-full flex-col gap-3">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) => getNavLinkClassName(isActive)}
            >
              <FontAwesomeIcon icon={iconMap[item.icon]} />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-15 mx-8">
        <Link to="/">
          <Button variant="secondary" className="mt-auto rounded-full">
            <FontAwesomeIcon icon={iconMap["arrowLeft"]} />
            Về trang chủ
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default SidebarNav;
