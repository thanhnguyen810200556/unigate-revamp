import { iconMap } from "../utilities/iconUtils";
const Loader = iconMap.loader;
function Loading({ className = "", children }) {
  return (
    <div className={`flex-1 ${className}`}>
      <div className="inline-block rounded-lg rounded-bl-sm p-3">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader className="h-4 w-4 animate-spin" />
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
