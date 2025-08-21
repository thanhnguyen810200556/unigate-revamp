import { useAuth } from "../../../contexts/FakeAuthContext";
import Button from "../../../shared/ui/Button";
import InputField from "../../../shared/ui/InputField";

function UpdatePersonalInforForm() {
  const { user } = useAuth();

  return (
    <div className="mt-3 rounded-lg bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-xl font-semibold text-gray-800">
        Cập nhật thông tin
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center">
          <label className="text-sm font-medium text-gray-700 md:text-right">
            CCCD
          </label>
          <div className="md:col-span-2">
            <InputField
              type="cccd"
              value={user.cccd}
              readOnly={true}
              inputClassName="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center">
          <label className="text-sm font-medium text-gray-700 md:text-right">
            Họ tên
          </label>
          <div className="md:col-span-2">
            <InputField type="text" value={user.name} />
            <p className="mt-1 text-sm text-red-600"></p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center">
          <label className="text-sm font-medium text-gray-700 md:text-right">
            Avatar
          </label>
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <label className="cursor-pointer rounded-lg bg-[#0056B3] px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                Choose File
                <InputField
                  type="file"
                  id="avatar"
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <span className="text-sm text-gray-500">No file chosen</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-3">
        <Button variant="secondary">Hủy</Button>
        <Button type="button">Cập nhật thông tin</Button>
      </div>
    </div>
  );
}

export default UpdatePersonalInforForm;
