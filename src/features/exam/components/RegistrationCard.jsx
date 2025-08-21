import { useState } from "react";
import ButtonRegistration from "./ButtonRegistration";
import RegistrationModal from "./RegistrationModal";
import ExamResult from "./ExamResult";
import RecommendModal from "./RecommendModal";

function RegistrationCard({
  title,
  examDate,
  startDate,
  endDate,
  admitCardDate,
  registrationPeriodStatus,
  isConfirm,
  onConfirm,
  onRegister,
  registered,
  isLoadingPayment,
  onPayment,
  showAlertConfirm,
  tempDate,
  examId,
  examResultDate,
  candidateExamResult,
  onRecommend,
  AiRecommend,
  isLoadingRecommend,
}) {
  const resultDate = new Date(examResultDate);
  const haveRegistered = candidateExamResult[0].haveRegisteredExam;
  const haveResult = candidateExamResult[0].haveExamResult;

  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [profileID, setProfileID] = useState("");
  const [isRecommendModalOpen, setIsRecommendModalOpen] = useState(false);

  const handleOpenModal = () => setIsRegistrationModalOpen(true);
  const handleCloseModal = () => setIsRegistrationModalOpen(false);

  const handleOpenRecommendModal = () => setIsRecommendModalOpen(true);
  const handleCloseRecommendModal = () => setIsRecommendModalOpen(false);

  return tempDate < resultDate && haveRegistered && haveResult ? (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              {title}
            </h3>

            <div className="space-y-2">
              <div className="flex flex-col items-start gap-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Ngày thi:</span>
                  <span className="ml-1">{examDate}</span>
                </div>

                <div>
                  <span className="font-medium">Thời gian đăng ký:</span>
                  <span className="ml-1">
                    {new Date(startDate).toLocaleDateString("vi-VN")} -{" "}
                    {new Date(endDate).toLocaleDateString("vi-VN")}
                  </span>
                </div>

                {registered === "unpaid" &&
                  registrationPeriodStatus === "ongoing" && (
                    <div className="flex items-center gap-2">
                      <span>
                        Mã hồ sơ:{" "}
                        <span className="text-red-500">{profileID}</span>{" "}
                      </span>
                      <div className="rounded-full bg-red-200 px-2 py-1 text-xs font-medium text-red-800">
                        Chưa thanh toán
                      </div>
                    </div>
                  )}

                {registered === "paid" &&
                  registrationPeriodStatus === "ongoing" && (
                    <div className="flex items-center gap-2">
                      <span>
                        Mã hồ sơ:{" "}
                        <span className="text-red-500">{profileID}</span>{" "}
                      </span>
                      <div className="rounded-full bg-green-200 px-2 py-1 text-xs font-medium text-green-800">
                        Đã thanh toán
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>

          <ButtonRegistration
            registrationPeriodStatus={registrationPeriodStatus}
            onOpen={handleOpenModal}
            isConfirm={isConfirm}
            isFirstOpen={isFirstOpen}
            isLoadingPayment={isLoadingPayment}
            onPayment={onPayment}
            registered={registered}
            tempDate={tempDate}
            admitCardDate={admitCardDate}
          />
          <RegistrationModal
            isOpen={isRegistrationModalOpen}
            onClose={handleCloseModal}
            onConfirm={onConfirm}
            isConfirm={isConfirm}
            isFirstOpen={isFirstOpen}
            setIsFirstOpen={setIsFirstOpen}
            onRegister={onRegister}
            setProfileID={setProfileID}
            profileID={profileID}
            registered={registered}
            examId={examId}
          />
        </div>
      </div>
      {showAlertConfirm && registrationPeriodStatus === "ongoing" && (
        <div className="flex justify-end text-sm text-red-500">
          *Vui lòng xác nhận trước khi thanh toán
        </div>
      )}
      {registered === "paid" && registrationPeriodStatus === "ongoing" && (
        <div className="flex justify-end text-sm text-[#0056B3]">
          Từ ngày {new Date(admitCardDate).toLocaleDateString("vi-VN")} thí sinh
          truy cập tài khoản để in giấy báo dự thi
        </div>
      )}
    </>
  ) : (
    <>
      <ExamResult
        examDate={examDate}
        candidateExamResult={candidateExamResult}
        onRecommend={onRecommend}
        onOpenRecModal={handleOpenRecommendModal}
      />
      <RecommendModal
        isRecommendModalOpen={isRecommendModalOpen}
        onCloseRecModal={handleCloseRecommendModal}
        AIsummary={AiRecommend.summary}
        AIrecommendations={AiRecommend.recommendations}
        isLoadingRecommend={isLoadingRecommend}
      />
    </>
  );
}

export default RegistrationCard;
