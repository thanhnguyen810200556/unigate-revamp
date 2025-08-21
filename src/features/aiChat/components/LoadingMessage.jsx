import Loading from "../../../shared/ui/Loading";
import { iconMap } from "../../../shared/utilities/iconUtils";

const Bot = iconMap.bot;

function LoadingMessage() {
  return (
    <div className="mb-4 flex gap-3">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
        <Bot className="h-4 w-4" />
      </div>
      <Loading>
        <span className="text-sm">Thinking...</span>
      </Loading>
    </div>
  );
}

export default LoadingMessage;
