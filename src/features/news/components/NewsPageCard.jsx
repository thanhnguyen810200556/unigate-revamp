import { Link } from "react-router-dom";
import Button from "../../../shared/ui/Button";
function NewsPageCard({
  image,
  imageText,
  date,
  title,
  excerpt,
  category,
  link,
}) {
  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-lg border border-gray-200 px-6 py-6">
      <div className="h-50 relative w-full">
        <img
          src={image}
          alt={imageText}
          className="absolute inset-0 h-full w-full"
        ></img>
      </div>

      <p className="text-[#6B7280]">{date}</p>
      <p>{category}</p>
      <h3 className="text-xl font-bold text-[#0056B3]">{title}</h3>
      <p>{excerpt}</p>

      <div className="mt-auto">
        <Link to={link}>
          <Button className="bg-gradient-to-br from-blue-50 to-indigo-50 hover:-translate-y-1">
            <span className="text-[#0056B3]">Xem chi tiết</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NewsPageCard;
