import Button from "../../../shared/ui/Button";
import Modal from "../../../shared/ui/Modal";

function SubmitModal({ isOpen, unansweredQuestions, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    <Modal title="Xác nhận nộp bài" className="max-w-sm" onClick={onClose}>
      <p className="mb-6 text-[16px] text-[#666666]">
        Bạn còn {unansweredQuestions} câu chưa trả lời.
        <br />
        Bạn có chắc chắn muốn nộp bài?
      </p>
      <div className="flex justify-end gap-3">
        <Button variant="NA" onClick={onClose}>
          Tiếp tục làm bài
        </Button>
        <Button onClick={onSubmit}>Nộp bài</Button>
      </div>
    </Modal>
  );
}

export default SubmitModal;
