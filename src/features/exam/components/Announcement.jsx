import { Check, XCircle, AlertTriangle } from "lucide-react";

function Announcement({
  tempDate,
  type = "danger",
  exam_dates,
  registrationStatus,
  candidateExamResult,
}) {
  const config = {
    success: {
      border: "border-[#059669]",
      bg: "bg-[#F0FDF4]",
      text: "text-[#059669]",
      iconBg: "bg-[#059669]",
      icon: <Check className="h-4 w-4 text-white" strokeWidth={3} />,
      title: "Kết quả kỳ thi đã được công bố!",
      message: "",
    },
    warning: {
      border: "border-[#F59E0B]",
      bg: "bg-[#FFFBEB]",
      text: "text-[#D97706]",
      iconBg: "bg-[#F59E0B]",
      icon: <AlertTriangle className="h-4 w-4 text-white" strokeWidth={3} />,
      title: "Bạn đã đăng ký kỳ thi thành công!",
      message: "Vui lòng quay trở lại đây xem kết quả khi đến ngày công bố.",
    },
    danger: {
      border: "border-[#DC2626]",
      bg: "bg-[#FEF2F2]",
      text: "text-[#DC2626]",
      iconBg: "bg-[#DC2626]",
      icon: <XCircle className="h-4 w-4 text-white" strokeWidth={3} />,
      title:
        registrationStatus === "unpaid"
          ? "Bạn chưa hoàn tất đăng ký!"
          : "Bạn chưa đăng ký thi!",
      message:
        registrationStatus === "unpaid"
          ? "Vui lòng xác nhận hồ sơ và thanh toán lệ phí để hoàn tất đăng kí dự thi."
          : "Hãy đăng ký ngay để không bỏ lỡ kỳ thi quan trọng.",
    },
    noResult: {
      border: "border-[#6B7280]",
      bg: "bg-[#F9FAFB]",
      text: "text-[#374151]",
      iconBg: "bg-[#6B7280]",
      icon: <XCircle className="h-4 w-4 text-white" strokeWidth={3} />,
      title: "Không có kết quả thi",
      message:
        "Bạn đã đăng ký nhưng không tham gia kỳ thi, vì vậy không có điểm.",
    },
  };

  let dynamicMessage = config[type]?.message;
  const haveRegistered = candidateExamResult[0].haveRegisteredExam;
  const haveResult = candidateExamResult[0].haveExamResult;

  exam_dates.forEach((exam) => {
    const resultDate = new Date(exam.examResultDate);

    if (tempDate >= resultDate && haveRegistered && haveResult) {
      type = "success";
      dynamicMessage = `Kết quả ${exam.title} năm ${new Date().getFullYear()} đã có. Xem ngay bên dưới.`;
    }

    if (tempDate >= resultDate && haveRegistered && !haveResult) {
      type = "noResult";
      dynamicMessage = `Bạn đã đăng ký ${exam.title} nhưng không tham gia kỳ thi, vì vậy không có điểm.`;
    }
  });

  // Nếu đã đăng ký (đã thanh toán) nhưng chưa tới ngày công bố -> warning
  if (registrationStatus === "paid" && type !== "success") {
    type = "warning";
  }
  const { border, bg, text, iconBg, icon, title } = config[type];

  return (
    <div className={`mb-6 w-full border-l-4 ${border} ${bg} rounded-xl p-4`}>
      <div className="flex items-center gap-3">
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full ${iconBg}`}
        >
          {icon}
        </div>
        <div>
          <h2 className={`text-lg font-bold ${text}`}>{title}</h2>
          <p className={`text-sm ${text}`}>{dynamicMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
