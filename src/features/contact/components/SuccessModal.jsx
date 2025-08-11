import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../shared/utilities/iconUtils";
import Button from "../../../shared/ui/Button";
import Modal from "../../../shared/ui/Modal";

function SuccessModal({ isOpen, onCloseSuccessModal }) {
  if (!isOpen) return null;
  return (
    <Modal
      title={
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon
            icon={iconMap.circleCheck}
            className="text-2xl text-[#0056B3]"
          />
          <span className="font-semibold text-[#0056B3]">Đã gửi tin nhắn</span>
        </div>
      }
      className="max-w-sm rounded-2xl shadow-lg"
      classNameTitle="mx-auto"
    >
      <p className="mb-6 text-center text-[16px] text-[#666666]">
        Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
      </p>
      <div className="flex justify-center">
        <Button onClick={onCloseSuccessModal}>Đóng</Button>
      </div>
    </Modal>
  );
}

export default SuccessModal;
