export default function NewsCard({ item }) {
  return (
    <div className="announcement-card flex w-[300px] flex-shrink-0 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div>
        <div
          className={`${item.badgeColor} inline-block rounded-br-lg px-4 py-2 text-sm font-semibold text-white`}
        >
          {item.badge}
        </div>
      </div>

      <div className="relative flex h-40 items-center justify-center bg-gray-300">
        <img
          src={item.image}
          alt={item.imageText}
          className="absolute inset-0 h-full w-full object-cover"
        ></img>
      </div>

      <div className="p-6">
        <div className="mb-2 text-sm text-[#0056B3]">{item.date}</div>
        <h3 className="mb-3 text-xl font-semibold leading-tight text-gray-800">
          {item.title}
        </h3>
        <p className="mb-4 text-base leading-relaxed text-gray-600">
          {item.excerpt}
        </p>
      </div>

      <div className="ml-10 mt-auto">
        <a
          href={item.link}
          className="group flex items-center gap-2 text-sm font-semibold text-[#0056B3] transition-colors hover:text-blue-700"
        >
          Xem chi tiết
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
