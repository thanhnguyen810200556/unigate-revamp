import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../shared/ui/Button";
import { iconMap } from "../../../shared/utilities/iconUtils";
import { Link } from "react-router-dom";

function FeatureCard({ link, title, description, buttonLabel, icon }) {
  return (
    <div className="flex w-[21rem] items-center justify-center gap-10 rounded-2xl border-2 border-[#0056B3] text-[#0056B3] transition hover:-translate-y-1 hover:bg-[#cee6ff]">
      <div className="flex flex-col gap-1">
        <h3 className="font-medium">{title}</h3>
        <p className="mb-1 text-[13px]">{description}</p>
        <Link to={link}>
          <div>
            <Button
              size="sm"
              className="h-[30px] w-[90px] rounded-full text-[13px]"
            >
              {buttonLabel}
            </Button>
          </div>
        </Link>
      </div>

      <div
        className={`h-18 w-18 flex flex-shrink-0 items-center justify-center rounded-lg bg-[#0056B3]`}
      >
        <FontAwesomeIcon
          icon={iconMap[`${icon}`]}
          className={`text-4xl text-white`}
        />
      </div>
    </div>
  );
}

export default FeatureCard;
