import Button from "../../../shared/ui/Button";
import Modal from "../../../shared/ui/Modal";

function ExitModal({ isOpen, onClose, onExit }) {
  if (!isOpen) return null;
  return (
    <Modal title="Xác nhận thoát" className="max-w-sm" onClick={onClose}>
      <p className="mb-6 text-[16px] text-[#666666]">
        Bạn có chắc chắn muốn thoát khỏi bài thi? Mọi câu trả lời sẽ không được
        lưu lại.
      </p>
      <div className="flex justify-end gap-3">
        <Button variant="NA" onClick={onClose}>
          Hủy
        </Button>
        <Button variant="danger" onClick={onExit}>
          Thoát
        </Button>
      </div>
    </Modal>
  );
}

export default ExitModal;
