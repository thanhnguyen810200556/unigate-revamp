import { Link } from "react-router-dom";

function ContentBreadcrumb() {
  return (
    <nav className="mb-8">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            to="/news"
            className="flex items-center text-[#0056B3] transition-colors duration-200 hover:text-blue-800"
          >
            Tin tức
          </Link>
        </li>
        <li className="text-gray-400">/</li>
        <li>
          <span className="font-medium text-gray-600">Chi tiết bài viết</span>
        </li>
      </ol>
    </nav>
  );
}

export default ContentBreadcrumb;
