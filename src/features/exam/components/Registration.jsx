import RegistrationCard from "./RegistrationCard";

function Registration({
  exam_dates,
  onConfirm,
  isConfirm,
  onRegister,
  registrationStatus,
  isLoadingPayment,
  onPayment,
  showAlertConfirm,
  candidateExamResult,
  tempDate,
  onRecommend,
  AiRecommend,
  isLoadingRecommend,
}) {
  function getRegistrationPeriodStatus(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (tempDate < start) return "upcoming";
    if (tempDate >= start && tempDate <= end) return "ongoing";
    return "closed";
  }

  return (
    <div className="mb-10 flex flex-col gap-4">
      {exam_dates.map((date) => (
        <RegistrationCard
          key={date.id}
          tempDate={tempDate}
          examId={date.id}
          title={date.title}
          startDate={date.startDate}
          endDate={date.endDate}
          examDate={date.examDate}
          examResultDate={date.examResultDate}
          admitCardDate={date.admitCardDate}
          isConfirm={isConfirm}
          onConfirm={onConfirm}
          onRegister={onRegister}
          registered={registrationStatus}
          isLoadingPayment={isLoadingPayment}
          onPayment={onPayment}
          onRecommend={onRecommend}
          showAlertConfirm={showAlertConfirm}
          AiRecommend={AiRecommend}
          isLoadingRecommend={isLoadingRecommend}
          candidateExamResult={candidateExamResult}
          registrationPeriodStatus={getRegistrationPeriodStatus(
            date.startDate,
            date.endDate,
          )}
        />
      ))}
    </div>
  );
}

export default Registration;
