import Button from "../../../shared/ui/Button";

function ButtonRegistration({
  registrationPeriodStatus,
  onOpen,
  isConfirm,
  isFirstOpen,
  isLoadingPayment,
  onPayment,
  registered,
  tempDate,
  admitCardDate,
}) {
  const admitDate = new Date(admitCardDate).toLocaleDateString("vi-VN");
  return (
    <div className="flex flex-col items-end gap-4">
      {registrationPeriodStatus === "upcoming" && (
        <>
          <Button variant="gray" className="rounded-full">
            Sắp diễn ra
          </Button>
          <Button disabled={true}>Đăng ký</Button>
        </>
      )}

      {registrationPeriodStatus === "ongoing" && (
        <>
          <Button variant="gray" className="rounded-full">
            Đang diễn ra
          </Button>
          {!isConfirm && isFirstOpen ? (
            <Button onClick={onOpen}>Đăng ký</Button>
          ) : !(registered === "paid") ? (
            <div className="flex gap-2">
              <Button onClick={onOpen}>Điều chỉnh hồ sơ</Button>
              <Button variant="danger" onClick={onPayment}>
                {isLoadingPayment ? "Đang thanh toán..." : "Thanh toán"}
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button onClick={onOpen}>Xem hồ sơ</Button>
              <Button
                disabled={!(tempDate >= admitDate && tempDate <= admitDate + 7)}
              >
                Tải giấy báo dự thi
              </Button>
            </div>
          )}
        </>
      )}

      {registrationPeriodStatus === "closed" && (
        <>
          <Button variant="gray" className="rounded-full">
            Đã kết thúc
          </Button>{" "}
        </>
      )}
    </div>
  );
}

export default ButtonRegistration;
