import { useState } from "react";
import { useAuth } from "../../../contexts/FakeAuthContext";
import { examDates } from "../../../shared/constants/examDates";
import { callAPI } from "../api/callAPI";
import { candidatesExamResult } from "../../../mocks/candidatesExamResult";
import Announcement from "../components/Announcement";
import Registration from "../components/Registration";

const exam_dates = [...examDates].filter((exam) => Number(exam.id) !== 3);
const tempDate = new Date("2025-04-20");

function ExamPage() {
  const { user } = useAuth();
  const candidateExamResult = candidatesExamResult.filter(
    (candidate) => candidate.cccd === user.cccd,
  );

  const [isConfirm, setConfirm] = useState(false);
  // "none" = chưa đăng ký, "unpaid" = đã đăng ký nhưng chưa trả, "paid" = đã thanh toán
  const [registrationStatus, setRegistrationStatus] = useState("none");
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [isLoadingRecommend, setIsLoadingRecommend] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [AiRecommend, setAiRecommend] = useState({
    recommendations: [],
    summary: {},
  });

  let timeout;
  function handleRecommend() {
    setIsLoadingRecommend(true);
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      try {
        const response = await callAPI();
        let cleaned = response.replace(/```json|```/g, "").trim();

        const data = JSON.parse(cleaned);

        setAiRecommend((prev) => ({
          ...prev,
          recommendations: data.recommendations,
          summary: data.summary,
        }));

        setIsLoadingRecommend(false);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    }, 1500);
  }

  function handleConfirm(confirm) {
    setConfirm(!confirm);
    setShowAlertConfirm(false);
  }

  const handleRegister = () => setRegistrationStatus("unpaid");

  function handlePayment() {
    if (!isConfirm) {
      setShowAlertConfirm(true);
      return;
    }

    setIsLoadingPayment(true);
    setTimeout(() => {
      setRegistrationStatus("paid");
      setIsLoadingPayment(false);
      alert("Thanh toán thành công!");
    }, 2000);
  }

  return (
    <div className="flex flex-col">
      <Announcement
        tempDate={tempDate}
        exam_dates={exam_dates}
        registrationStatus={registrationStatus}
        candidateExamResult={candidateExamResult}
      />
      <Registration
        tempDate={tempDate}
        exam_dates={exam_dates}
        isConfirm={isConfirm}
        onConfirm={handleConfirm}
        onRegister={handleRegister}
        registrationStatus={registrationStatus}
        isLoadingPayment={isLoadingPayment}
        onPayment={handlePayment}
        showAlertConfirm={showAlertConfirm}
        candidateExamResult={candidateExamResult}
        onRecommend={handleRecommend}
        AiRecommend={AiRecommend}
        isLoadingRecommend={isLoadingRecommend}
      />
    </div>
  );
}

export default ExamPage;
