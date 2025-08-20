import InputField from "../../../ui/InputField";
import TopBarMenu from "./TopBarMenu";
import User from "./User";

function TopBar() {
  return (
    <div className="mb-4 mt-5 flex h-[3.25rem] flex-1 justify-between">
      <div className="ml-5">
        <InputField
          placeholder="Search..."
          className="w-96"
          inputClassName="h-10 border px-3 border-[#0056B3]"
        />
      </div>
      <div className="flex items-center gap-2">
        <User />
        <TopBarMenu />
      </div>
    </div>
  );
}

export default TopBar;
