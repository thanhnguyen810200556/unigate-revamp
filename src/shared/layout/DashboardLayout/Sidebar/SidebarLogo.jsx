import Logo from "../../../ui/Logo";

function SidebarLogo() {
  return (
    <Logo
      wrapper="flex flex-col items-center"
      classNameLogoMark="text-xl mt-4 font-semibold text-white"
      bgLogoSize="h-25 w-25"
      logoClassName="text-6xl text-white"
    />
  );
}

export default SidebarLogo;
