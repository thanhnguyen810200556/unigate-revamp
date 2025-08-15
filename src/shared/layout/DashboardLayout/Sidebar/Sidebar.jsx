import SidebarNav from "./SidebarNav";
import SidebarLogo from "./SidebarLogo";

function Sidebar() {
  return (
    <div className="w-58 mx-10 my-5 flex h-[655px] flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#5A9BE5] to-[#0056B3] py-5">
      <SidebarLogo />
      <SidebarNav />
    </div>
  );
}

export default Sidebar;
