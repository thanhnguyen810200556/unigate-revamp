import NewsPageCard from "./NewsPageCard";
function NewsCardList({ filteredNews }) {
  const data = [...filteredNews];
  return (
    <div className="mx-10 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.length > 0 ? (
        data.map((items) => (
          <NewsPageCard
            key={items.id}
            image={items.image}
            imageText={items.imageText}
            date={items.date}
            category={items.category}
            title={items.title}
            excerpt={items.excerpt}
            link={items.link}
          />
        ))
      ) : (
        <div className="col-span-3 py-10 text-center">
          <p className="text-lg text-gray-500">
            Không tìm thấy kết quả phù hợp
          </p>
        </div>
      )}
    </div>
  );
}

export default NewsCardList;
