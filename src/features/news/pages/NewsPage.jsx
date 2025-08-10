import NewsHeading from "../components/NewsHeading";
import NewsCardList from "../components/NewsCardList";
import { useState } from "react";
import { newsData } from "../../../mocks/newsData";

function NewsPage() {
  const [filter, setFilter] = useState("Tất cả");
  const [searchNews, setSearchNews] = useState("");

  const filteredNews = newsData
    .filter((news) => filter === "Tất cả" || news.category === filter)
    .filter(
      (news) =>
        searchNews === "" ||
        (news.title?.toLowerCase() ?? "").includes(searchNews.toLowerCase()) ||
        (news.description?.toLowerCase() ?? "").includes(
          searchNews.toLowerCase(),
        ),
    );

  return (
    <main className="flex flex-col items-center px-16 py-16">
      <NewsHeading
        searchNews={searchNews}
        onSetSearchNews={setSearchNews}
        filter={filter}
        onSetFilter={setFilter}
      />
      <NewsCardList filteredNews={filteredNews} />
    </main>
  );
}

export default NewsPage;
