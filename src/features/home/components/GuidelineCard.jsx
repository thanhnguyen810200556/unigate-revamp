import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../shared/utilities/iconUtils";
function GuidelineCard({
  icon,
  title,
  description,
  iconBgColor = "bg-[#0056B3]",
  iconColor = "text-white",
}) {
  const IconComponent = iconMap[icon];
  return (
    <div className="flex items-center justify-center">
      <div className="group mt-8 flex h-[340px] w-[300px] flex-col gap-4 rounded-[60px] bg-[#F3F5F5] transition-all duration-300 hover:-translate-y-2 hover:bg-[#0056B3] hover:text-white">
        {/* Icon wrapper */}
        <div
          className={`ml-10 mt-10 flex h-[70px] w-[70px] ${iconBgColor} items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-white`}
        >
          <FontAwesomeIcon
            icon={IconComponent}
            className={`text-2xl transition-colors duration-300 ${iconColor} group-hover:text-[#0056B3]`}
          />
        </div>

        {/* Nội dung */}
        <h3 className="ml-10 text-left text-[19px] font-medium text-[#0056B3] transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="ml-10 text-left text-[#0056B3] transition-colors duration-300 group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
}

export default GuidelineCard;
