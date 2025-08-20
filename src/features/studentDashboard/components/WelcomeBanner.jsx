import { useAuth } from "../../../contexts/FakeAuthContext";

const today = new Date();

function WelcomeBanner() {
  const { user } = useAuth();
  return (
    <div className="w-ful flex h-[150px] flex-col rounded-2xl bg-gradient-to-l from-[#5A9BE5] to-[#0056B3] text-white">
      <div className="mx-10 my-5">
        <div>{`Ngày ${today.getDate()} tháng ${today.getMonth() + 1} năm ${today.getFullYear()}`}</div>
        <div className="mt-10 text-4xl font-medium">
          Chào mừng trở lại, {user?.name}
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
