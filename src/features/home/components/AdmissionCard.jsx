import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../shared/utilities/iconUtils";
function FeatureCard({
  icon,
  title,
  description,
  iconBgColor = "bg-blue-500",
  iconColor = "text-white",
}) {
  const IconComponent = iconMap[icon];

  return (
    <div className="flex items-start gap-4 rounded-lg bg-white p-4 transition-shadow hover:shadow-md">
      {/* Icon Container */}
      <div
        className={`h-12 w-12 flex-shrink-0 ${iconBgColor} flex items-center justify-center rounded-lg`}
      >
        <FontAwesomeIcon
          icon={IconComponent}
          className={`h-6 w-6 ${iconColor}`}
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
