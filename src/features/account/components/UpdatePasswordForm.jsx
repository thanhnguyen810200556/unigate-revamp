import { useState } from "react";
import Button from "../../../shared/ui/Button";
import InputField from "../../../shared/ui/InputField";

function UpdatePasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Mật khẩu mới và xác nhận không khớp");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("Mật khẩu phải dài ít nhất 6 ký tự");
      return;
    }

    setMessage("Cập nhật mật khẩu thành công (demo)");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="mt-3 rounded-lg bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-xl font-semibold text-gray-800">
        Cập nhật mật khẩu
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center">
            <label className="text-sm font-medium text-gray-700 md:text-right">
              Mật khẩu mới
            </label>
            <div className="md:col-span-2">
              <InputField
                type="password"
                placeholder="Mật khẩu mới"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center">
            <label className="text-sm font-medium text-gray-700 md:text-right">
              Xác nhận mật khẩu
            </label>
            <div className="md:col-span-2">
              <InputField
                type="password"
                placeholder="Xác nhận mật khẩu mới"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className="mt-1 text-sm text-red-600"></p>
            </div>
          </div>
          {message && (
            <p className="mt-2 flex justify-center text-sm">{message}</p>
          )}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button variant="secondary">Hủy</Button>
          <Button type="button">Cập nhật mật khẩu</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePasswordForm;
