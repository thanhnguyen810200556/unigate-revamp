import { newsData } from "../../../mocks/newsData";
import useNewsAnimation from "../hooks/useNewsAnimation";
import Button from "../../../shared/ui/Button";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

export default function NewsSection() {
  const { containerRef, animationStyle } = useNewsAnimation();

  const allNews = [...newsData, ...newsData];

  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Thêm CSS keyframes */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-container:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#0056B3]">
            Tin tức mới nhất
          </h2>
          <p className="text-lg text-gray-600">
            Cập nhật những thông tin quan trọng về kỳ thi ĐGNL!
          </p>
        </div>

        <div className="relative mx-auto">
          <div className="absolute bottom-0 left-0 top-0 z-10 w-24"></div>
          <div className="absolute bottom-0 right-0 top-0 z-10 w-24"></div>

          {/* Cards container with animation */}
          <div
            ref={containerRef}
            className="scroll-container flex w-max gap-8 py-4"
            style={animationStyle}
          >
            {allNews.map((item, index) => (
              <NewsCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Button to view more news */}
        <Link to="/news">
          <div className="mt-12 flex justify-center">
            <Button variant="primary">Xem thêm</Button>
          </div>
        </Link>
      </div>
    </section>
  );
}
