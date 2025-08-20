import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Logout from "../../../../features/auth/components/Logout";
import Notification from "./Notification";

function TopBarMenu() {
  return (
    <>
      <Notification />
      <Link to="/dashboard/account">
        <button className="flex h-[2.2rem] w-[2.2rem] cursor-pointer items-center justify-center rounded-2xl hover:bg-gray-100 hover:text-[#0056B3]">
          <HiOutlineUser className="text-2xl" />
        </button>
      </Link>
      <Logout />
    </>
  );
}

export default TopBarMenu;
