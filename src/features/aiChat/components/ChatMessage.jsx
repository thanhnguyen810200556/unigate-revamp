import { iconMap } from "../../../shared/utilities/iconUtils";

function ChatMessage({ messageText, isBot }) {
  const Bot = iconMap.bot;
  const User = iconMap.userLucide;
  return (
    <div className={`mb-4 flex gap-3 ${isBot ? "" : "flex-row-reverse"}`}>
      <div
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
          isBot ? "bg-blue-500 text-white" : "bg-gray-500 text-white"
        }`}
      >
        {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
      </div>
      <div className={`max-w-[80%] flex-1 ${isBot ? "" : "text-right"}`}>
        <div
          className={`inline-block rounded-lg p-3 ${
            isBot
              ? "rounded-bl-sm bg-blue-50 text-gray-800"
              : "rounded-br-sm bg-blue-500 text-white"
          }`}
        >
          <p className="whitespace-pre-wrap text-sm leading-relaxed">
            {messageText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
