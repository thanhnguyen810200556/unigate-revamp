import { Link } from "react-router-dom";
import Button from "../../../shared/ui/Button";

function NewsPanelCard({ image, imageText, date, title, link }) {
  return (
    <div className="border-t-1 flex">
      <div className="h-25 w-25 mt-[2px] flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={imageText}
          className="h-full w-full object-fill"
        />
      </div>

      <div className="ml-3 flex flex-1 flex-col">
        <div className="flex flex-col gap-2">
          <p className="text-[13px]">{date}</p>
          <h4 className="font-medium text-[#0056B3]">{title}</h4>
        </div>

        <div className="ml-auto mt-auto flex flex-shrink-0 justify-end">
          <Link to={link}>
            <Button size="ns" variant="ghost">
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsPanelCard;
