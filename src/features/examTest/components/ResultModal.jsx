import { test, testSection } from "../../../shared/constants/examTestConfig";
import Button from "../../../shared/ui/Button";
import Modal from "../../../shared/ui/Modal";

function ResultModal({
  isOpen,
  correctAnswers,
  totalQuestions,
  answeredPerSection,
  onClose,
  onReview,
  onGoToDB,
}) {
  if (!isOpen) return null;
  return (
    <Modal
      title="Kết quả bài thi"
      classNameTitle="text-[#0056B3] mx-auto"
      className="max-w-md"
      isCloseButton="true"
      onClick={onClose}
    >
      <div className="mb-4 rounded-lg bg-[#F0F7FF] p-4 text-center">
        <p className="mb-1 text-[16px] text-[#666666]">Số câu trả lời đúng</p>
        <p className="text-[24px] font-bold text-[#0056B3]">
          {correctAnswers}/{totalQuestions} câu
        </p>
      </div>

      <div className="mb-6">
        <h4 className="mb-2 text-[16px] font-bold text-black">
          Kết quả theo phần
        </h4>
        <div className="space-y-4">
          {Object.values(testSection).map((section) => (
            <div key={section.id}>
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[14px] text-[#666666]">{section?.name}</p>
                <p className="text-[14px] text-[#666666]">
                  {answeredPerSection[section?.id] ?? 0}/
                  {test?.QUESTIONS_PER_SECTION ?? 1}
                  câu
                </p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-[#0056B3]"
                  style={{
                    width: `${((answeredPerSection[section?.id] ?? 0) / (test?.QUESTIONS_PER_SECTION ?? 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button onClick={onReview}>Xem lại bài làm</Button>
        <Button variant="secondary" onClick={onGoToDB}>
          Về trang chủ
        </Button>
      </div>
    </Modal>
  );
}

export default ResultModal;
