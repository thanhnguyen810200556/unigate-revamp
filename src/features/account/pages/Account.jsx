import UpdatePasswordForm from "../components/UpdatePasswordForm";
import UpdatePersonalInforForm from "../components/UpdatePersonalInforForm";

function Account() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {" "}
      <h1 className="text-2xl font-bold text-[#0056B3]">Cập nhật tài khoản</h1>
      <UpdatePersonalInforForm />
      <UpdatePasswordForm />
    </div>
  );
}

export default Account;
