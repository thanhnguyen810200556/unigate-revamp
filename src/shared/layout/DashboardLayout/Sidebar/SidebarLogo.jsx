import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../HomepageLayout/Header/Logo";
import { iconMap } from "../../../utilities/iconUtils";

function SidebarLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-25 w-25 flex items-center justify-center rounded-2xl bg-gradient-to-t from-[#5A9BE5] to-[#0056B3]">
        <FontAwesomeIcon
          className="text-6xl text-white"
          icon={iconMap["graduationCap"]}
        />
      </div>
      <Logo className="mt-2 text-white" />
    </div>
  );
}

export default SidebarLogo;
