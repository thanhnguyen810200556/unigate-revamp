import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../../../../features/auth/components/Logout";

function TopBarMenu() {
  return (
    <>
      <button
        onClick={() => console.log("clicked")}
        className="flex h-[2.2rem] w-[2.2rem] cursor-pointer items-center justify-center rounded-2xl hover:bg-gray-100 hover:text-[#0056B3]"
      >
        <HiOutlineUser className="text-2xl" />
      </button>
      <Logout />
    </>
  );
}

export default TopBarMenu;
