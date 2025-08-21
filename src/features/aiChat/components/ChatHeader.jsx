import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../shared/utilities/iconUtils";

function ChatHeader() {
  return (
    <div className="mb-6 mt-10 flex justify-start gap-4 rounded-xl bg-white p-8">
      <div className="h-13 w-13 flex items-center justify-center rounded-xl bg-gradient-to-t from-[#5A9BE5] to-[#0056B3]">
        <FontAwesomeIcon
          icon={iconMap["graduationCap"]}
          className="text-3xl text-white"
        />
      </div>
      <div>
        <div className="text-2xl font-medium text-[#0056B3]">Cố vấn AI</div>
        <div className="text-gray-500">
          Người đồng hành cùng bạn trong tuyển sinh và học tập
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
