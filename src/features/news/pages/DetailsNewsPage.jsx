import { newsData } from "../../../mocks/newsData";
import { Link, useParams } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import ContentBreadcrumb from "../components/ContentBreadcrumb";
import ContentNews from "../components/ContentNews";
import ContentTags from "../components/ContentTags";
import { ChevronLeft } from "lucide-react";
import Button from "../../../shared/ui/Button";

function DetailsNewsPage() {
  const { id } = useParams();
  const content = newsData.find((item) => item.id === id) || newsData[0];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="mx-auto mt-14 max-w-4xl px-6 py-10">
        <ContentBreadcrumb />
        <article className="flex flex-col gap-0 overflow-hidden rounded-2xl bg-white shadow-2xl">
          <ContentHeader content={content} />
          <ContentNews content={content} />
          <div className="px-8 py-10">
            <ContentTags content={content} />
          </div>
        </article>
        <div className="mt-8 text-center">
          <Link to="/news">
            <Button
              variant="lightPrimary"
              className="mx-auto flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại trang tin tức
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsNewsPage;
