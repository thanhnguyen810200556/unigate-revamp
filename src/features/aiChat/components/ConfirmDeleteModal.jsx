import Button from "../../../shared/ui/Button";
import Modal from "../../../shared/ui/Modal";

function ConfirmDeleteModal({
  isDeleteModalOpen,
  onClose,
  onDeletedChat,
  chatId,
}) {
  if (!isDeleteModalOpen) return;

  return (
    <Modal className="max-w-xs">
      Bạn muốn xóa chat ?
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="NA" onClick={onClose}>
          Thoát
        </Button>
        <Button variant="danger" onClick={() => onDeletedChat(chatId)}>
          Xóa
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmDeleteModal;
