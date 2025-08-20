import ExamRegistrationCard from "./ExamRegistrationCard";
import { examDates } from "../../../shared/constants/examDates";

const exam_dates = [...examDates];

function ExamRegistrationSection() {
  const tempDate = new Date("2025-04-17");

  function isRegistrationClosed(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return tempDate < start || tempDate > end;
  }

  return (
    <div className="mt-6 flex h-[13.25rem] w-[48rem] flex-col rounded-2xl">
      <div className="mb-2 text-[20px] font-medium text-[#0056B3]">
        Đăng ký kỳ thi và xét tuyển ĐGNL
      </div>

      <div className="flex flex-1 gap-5">
        {exam_dates.map((date) => (
          <ExamRegistrationCard
            key={date.id}
            id={date.id}
            title={date.title}
            examDate={date.examDate}
            startDate={date.startDate}
            endDate={date.endDate}
            isDisabled={isRegistrationClosed(date.startDate, date.endDate)}
            isResultAvailable={
              tempDate >= new Date(date.examResultDate) ? true : false
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ExamRegistrationSection;
