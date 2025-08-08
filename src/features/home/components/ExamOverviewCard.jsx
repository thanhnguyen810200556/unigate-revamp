import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../shared/utilities/iconUtils";
import CountUp from "react-countup";

function OverviewCard({
  number,
  label,
  icon,
  index,
  iconBgColor = "bg-[#0056B3]",
  iconColor = "text-white",
}) {
  const IconComponent = iconMap[icon];

  return (
    <div
      className="flex items-center gap-4 rounded-lg bg-[rgba(177,216,255,0.38)] p-4 shadow-md transition-shadow hover:shadow-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`${iconBgColor} my-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg`}
      >
        <FontAwesomeIcon
          icon={IconComponent}
          className={`${iconColor} h-6 w-6`}
        />
      </div>

      <div className="flex min-h-[60px] flex-col justify-center">
        <div className="object-contain text-xl font-bold leading-9 text-[#0056B3]">
          <CountUp
            start={0}
            end={number}
            duration={2}
            delay={index * 0.1}
            useEasing={true}
            separator=","
          />
        </div>{" "}
        <p className="items-center text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
}

export default OverviewCard;
