import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../utilities/iconUtils";

function Logo({ classNameLogoMark, bgLogoSize, logoClassName, wrapper }) {
  return (
    <div className={wrapper}>
      <div
        className={`flex ${bgLogoSize} items-center justify-center rounded-xl bg-gradient-to-t from-[#5A9BE5] to-[#0056B3]`}
      >
        <FontAwesomeIcon
          className={logoClassName}
          icon={iconMap["graduationCap"]}
        />
      </div>
      <h1 className={`text-xl ${classNameLogoMark} font-semibold`}>
        VNUHCM UNIGATE
      </h1>
    </div>
  );
}
export default Logo;
