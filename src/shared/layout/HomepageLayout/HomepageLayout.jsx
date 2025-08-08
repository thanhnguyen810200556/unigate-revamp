import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function HomepageLayout() {
  return (
    <div className="relative">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default HomepageLayout;
