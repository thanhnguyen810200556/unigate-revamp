import Logo from "../../../ui/Logo";

function LogoHeader() {
  return (
    <Logo
      wrapper="flex items-center gap-3"
      classNameLogoMark="text-xl font-semibold text-gray-800"
      bgLogoSize="h-10 w-10"
      logoClassName="text-2xl text-white"
    />
  );
}
export default LogoHeader;
