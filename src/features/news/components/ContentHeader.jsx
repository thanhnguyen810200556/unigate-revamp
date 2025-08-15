import { Newspaper, Calendar, Clock } from "lucide-react";

function ContentHeader({ content }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-10">
      <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
        {content.title}
      </h1>

      <div className="flex flex-wrap items-center gap-6 text-blue-100">
        <div className="flex items-center">
          <Newspaper className="mr-2 h-5 w-5" />
          <span className="font-medium">
            {content.category || "TechNews Vietnam"}
          </span>
        </div>
        <div className="flex items-center">
          <Calendar className="mr-2 h-5 w-5" />
          <time className="font-medium">{content.date}</time>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
