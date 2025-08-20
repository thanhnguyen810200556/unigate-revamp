import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";
import LogoHeader from "./LogoHeader";

function Header() {
  return (
    <header className="px-30 fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white py-6">
      <div className="mx-auto flex items-center justify-between">
        <LogoHeader />
        <Navigation />
        <AuthButtons />
      </div>
    </header>
  );
}

export default Header;
