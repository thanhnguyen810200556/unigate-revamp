import Button from "../../../shared/ui/Button";
import { newsData } from "../../../mocks/newsData";
import NewsPanelCard from "./NewsPanelCard";
import { Link } from "react-router-dom";

const data = [...newsData].filter((news) => Number(news.id) !== 4);
function NewsPanel() {
  return (
    <div className="mt-10 flex h-[9.25rem] w-[21rem] flex-col gap-3">
      <div className="flex justify-between">
        <h3 className="text-[20px] font-medium text-[#0056B3]">Tin tức</h3>
        <Link to="/news">
          <Button size="ns" variant="ghost">
            Xem thêm
          </Button>
        </Link>
      </div>

      <div className="gap-5.5 flex flex-1 flex-col">
        {data.map((data) => (
          <NewsPanelCard
            key={data.id}
            data={data.date}
            image={data.image}
            imageText={data.imageText}
            date={data.date}
            title={data.title}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsPanel;
