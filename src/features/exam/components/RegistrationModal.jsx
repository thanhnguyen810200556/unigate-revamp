import { useEffect, useState } from "react";
import { examLocation } from "../../../mocks/examLocation";
import Button from "../../../shared/ui/Button";
import InputField from "../../../shared/ui/InputField";
import Modal from "../../../shared/ui/Modal";
import SelectField from "../../../shared/ui/SelectField";
import { generateMockProfileId } from "../utils/idGenerators";
import Loading from "../../../shared/ui/Loading";

function RegistrationModal({
  isOpen,
  onClose,
  onConfirm,
  isConfirm,
  isFirstOpen,
  setIsFirstOpen,
  onRegister,
  setProfileID,
  profileID,
  registered,
  examId,
}) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isLoadingGenerate, setIsLoadingGenerate] = useState(false);

  function handleSelectedLocation(e) {
    setSelectedLocation(e.target.value);
    isConfirm && onConfirm(isConfirm);
  }

  useEffect(() => {
    if (isOpen && isFirstOpen) {
      setIsLoadingGenerate(true);

      const timer = setTimeout(() => {
        setProfileID(generateMockProfileId());
        setIsFirstOpen(false);
        onRegister();
        setIsLoadingGenerate(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isFirstOpen, setIsFirstOpen, onRegister, setProfileID]);

  if (!isOpen) return null;
  const exam_locations = [...examLocation]
    .filter((location) => location.id === examId)
    .at(0);

  return (
    <Modal className="max-w-md">
      {isLoadingGenerate ? (
        <Loading>
          <span>Đang tạo hồ sơ...</span>
        </Loading>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <InputField
              name="hs"
              htmlFor="hs"
              label="Mã hồ sơ"
              readOnly={true}
              value={profileID}
            />
            <SelectField
              name="examLocation"
              htmlFor="examLocation"
              label={
                registered === "paid" ? "Địa điểm thi" : "Chọn địa điểm thi"
              }
              value={selectedLocation}
              onChange={(e) => handleSelectedLocation(e)}
              options={exam_locations.provinces}
              disabled={registered === "paid" ? true : false}
            />
            <InputField
              name="fees"
              htmlFor="fees"
              label="Lệ phí thi"
              readOnly={true}
              value={"3000.000 VNĐ"}
            />
            <InputField
              name="status"
              htmlFor="status"
              label="Tình trạng xác nhận hồ sơ"
              readOnly={true}
              value={isConfirm ? "Đã xác nhận" : "Chưa xác nhận"}
            />
          </div>
          <div className="mt-4 flex items-start justify-end gap-2">
            {registered === "paid" || (
              <Button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
              >
                Xác nhận
              </Button>
            )}
            <Button variant="NA" onClick={onClose}>
              Đóng
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
}

export default RegistrationModal;
