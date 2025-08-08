import { guidelineData } from "../../../mocks/guidelineData";
import GuidelineCard from "./GuidelineCard";

function GuidelineSection() {
  const data = [...guidelineData];
  return (
    <section className="bg-white py-16">
      <div className="gap-auto mx-auto items-center justify-center px-16 text-center">
        <h2 className="mb-6 text-5xl font-bold text-[#0056B3]">
          Nắm vững kỳ thi ĐGNL với thông tin <br /> chính xác – rõ ràng – cập
          nhật nhanh nhất
        </h2>
        <p className="text-3 mb-4 text-gray-700">
          Từ cấu trúc đề thi, thời gian thi đến quy chế – tất cả đều được tổng
          hợp đầy đủ, minh bạch.
        </p>

        <div className="flex justify-center gap-12">
          {data.map((item, index) => (
            <GuidelineCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              iconBgColor={item.iconBgColor}
              iconColor={item.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuidelineSection;
