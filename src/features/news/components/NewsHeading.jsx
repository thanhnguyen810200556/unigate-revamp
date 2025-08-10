import InputField from "../../../shared/ui/InputField";
import Button from "../../../shared/ui/Button";

const categories = ["Tất cả", "Tuyển sinh", "Kỳ thi", "Học thuật", "Sự kiện"];

function NewsHeading({ searchNews, onSetSearchNews, filter, onSetFilter }) {
  function handleSearchNews(e) {
    onSetSearchNews(e.target.value);
  }
  return (
    <div className="flex w-screen flex-col items-center gap-5 bg-gradient-to-br from-blue-50 to-indigo-50 px-16 py-8">
      <div className="mt-5 text-4xl font-bold text-[#0056B3]">Tin tức</div>

      <InputField
        id="new"
        placeholder="Tìm kiếm tin tức"
        className="my-0 w-full px-12"
        value={searchNews}
        onChange={handleSearchNews}
        type="text"
      />

      <div className="flex gap-5">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSetFilter(category)}
            variant={`${filter === category ? "primary" : "secondary"}`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default NewsHeading;
