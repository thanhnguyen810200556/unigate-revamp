import OverviewCard from "./ExamOverviewCard";
import { overviewData } from "../../../mocks/overviewData";

const data = [...overviewData];
function ExamOverview() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex items-center px-16">
        <div className="w-4xl space-y-4 px-24 text-left">
          <h1 className="text-5xl font-bold text-[#0056B3]">
            Kỳ thi Đánh giá Năng lực{" "}
          </h1>
          <p className="font-roboto text-base leading-6 text-[#333333]">
            Kỳ thi Đánh giá Năng lực là một trong những phương thức xét tuyển
            của ĐHQG-HCM. Kỳ thi này đánh giá toàn diện các năng lực của thí
            sinh thông qua các câu hỏi trắc nghiệm đa dạng, giúp các trường
            thành viên có thêm cơ sở tuyển chọn được những thí sinh phù hợp.
          </p>

          <div className="grid grid-cols-3 gap-5">
            {data.map((item, index) => (
              <OverviewCard
                key={index}
                number={item.number}
                label={item.label}
                icon={item.icon}
                index={index}
              />
            ))}
            <div />
          </div>
        </div>
        <div className="animate-slide-right my-auto items-center">
          <img
            src="https://congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2024/11/13/download-1-17314708298531446939757.jpg"
            alt="Minh họa kỳ thi ĐGNL"
            className="h-[300px] w-full transform rounded-xl border-2 border-[#EBF5FF] object-cover shadow-sm transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default ExamOverview;
