import InputField from "../../../shared/ui/InputField";
import Button from "../../../shared/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../shared/utilities/iconUtils";

function ChatInput({ onSubmit, isLoading, setInput, input, inputFocus }) {
  return (
    <form className="flex justify-start gap-4 rounded-b-xl bg-white p-4">
      <InputField
        htmlFor="AIchat"
        placeholder="Ask something..."
        className="w-full"
        inputClassName="border border-gray-300 p-3"
        ref={inputFocus}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSubmit(e)}
        disabled={isLoading}
      />
      <Button
        size="sm"
        className="flex items-center gap-2 whitespace-nowrap bg-blue-500 hover:bg-blue-600"
        onClick={onSubmit}
        disabled={isLoading}
      >
        <FontAwesomeIcon
          icon={iconMap["paperPlane"]}
          className="text-[1.25rem]"
        />
        <div className="w-full text-[1rem]">Gửi tin nhắn</div>
      </Button>
    </form>
  );
}

export default ChatInput;
