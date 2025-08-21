import CountUp from "react-countup";
import SubjectScoreItem from "./SubjectScoreItem";
import Button from "../../../shared/ui/Button";
import { subjects } from "../../../shared/constants/subjects";

function ExamResult({
  examDate,
  candidateExamResult,
  onRecommend,
  onOpenRecModal,
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-gray-800">
            Kỳ thi ĐGNL đợt 1
          </h3>
          <div className="text-sm text-gray-500">Ngày thi: {examDate}</div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => {
              onOpenRecModal();
              onRecommend();
            }}
          >
            Khuyến nghị ngành học
          </Button>
          <Button variant="secondary" onClick={() => alert("Đã tải kết quả")}>
            Tải kết quả thi
          </Button>
          <Button onClick={() => alert("Đã đăng kí phúc khảo")}>
            Đăng kí phúc khảo
          </Button>
        </div>
      </div>
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-500">Tổng điểm</p>
        <p className="text-4xl font-bold text-[#059669]">
          <CountUp
            start={0}
            end={candidateExamResult[0].total}
            duration={2}
            useEasing={true}
            separator=","
          />
        </p>
      </div>
      {Object.entries(subjects).map(([key, value], index) => {
        const score = candidateExamResult[0][key];
        const maxScore = value.max;
        const subjectName = value.label;
        return (
          <SubjectScoreItem
            key={index}
            subjectsName={subjectName}
            score={score}
            maxScore={maxScore}
            delay={index * 200}
          />
        );
      })}
    </div>
  );
}

export default ExamResult;
