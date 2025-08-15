import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import TopBar from "./TopBar/TopBar";

// bg-[#e9f3ff]
function DashboardLayout() {
  return (
    <div className="flex">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="relative mr-20 flex-1 flex-col">
        <div className="top-0 mr-5 flex">
          <TopBar />
        </div>
        <div className="mx-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
