function ContentTags({ content }) {
  const getTagsContent = (content) => {
    const baseTags = [content.category];

    if (content.category === "Kỳ thi") {
      baseTags.push("ĐGNL", "Đại học", "Thi cử");
    } else if (content.category === "Học thuật") {
      baseTags.push("Tài liệu", "Ôn tập", "Học tập");
    } else if (content.category === "Tuyển sinh") {
      baseTags.push("Xét tuyển", "Chỉ tiêu", "Đăng ký");
    }

    baseTags.push("2025", "ĐHQG TP.HCM");
    return baseTags;
  };

  const tags = getTagsContent(content);

  return (
    <div className="mt-10 border-t border-gray-200 pt-6">
      <h3 className="mb-3 text-sm font-semibold text-gray-600">Từ khóa:</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 transition-colors duration-200 hover:bg-blue-200"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
export default ContentTags;
