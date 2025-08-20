import { Link } from "react-router-dom";
import Button from "../../../shared/ui/Button";

function ExamRegistrationCard({
  id,
  title,
  examDate,
  startDate,
  endDate,
  isDisabled,
  isResultAvailable = false,
}) {
  return (
    <div className="flex w-[14rem] flex-col items-center justify-center gap-2 rounded-3xl border-2 border-[#0056B3] transition hover:-translate-y-1 hover:bg-[#cae3ff]">
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-[#0056B3]">{title}</h3>
        <p className="text-[13px] text-gray-600">
          {id === "3" ? "" : "Ngày thi:"} {examDate}
        </p>
        <p className="text-[13px] text-gray-600">
          Thời gian đăng kí thi: <br />
          {new Date(startDate).toLocaleDateString("vi-VN")} -{" "}
          {new Date(endDate).toLocaleDateString("vi-VN")}
        </p>
      </div>

      <Link to="/dashboard/exam">
        <Button
          size="sm"
          disabled={!isResultAvailable ? isDisabled : false}
          className="mt-2 h-[30px] rounded-full text-[13px]"
        >
          {isResultAvailable ? "Xem kết quả" : "Đăng ký"}
        </Button>
      </Link>
    </div>
  );
}

export default ExamRegistrationCard;
