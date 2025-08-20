import { useEffect } from "react";
import { useAuth } from "../../../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { SpinnerMini } from "../../../shared/ui/SpinnerMini";

function Logout() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, logout } = useAuth();
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate],
  );

  return (
    <button
      onClick={() => {
        logout();
      }}
      disabled={isLoading}
      className="relative z-20 flex h-[2.2rem] w-[2.2rem] cursor-pointer items-center justify-center rounded-2xl hover:bg-gray-100 hover:text-[#0056B3]"
    >
      {!isLoading ? (
        <HiArrowRightOnRectangle className="text-2xl" />
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default Logout;
