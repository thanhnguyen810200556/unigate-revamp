import ChatHeader from "../components/ChatHeader";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import PredefinedPrompts from "../components/predefinedPrompts";
import LoadingMessage from "../components/LoadingMessage";
import { useChat } from "../hooks/useChat";

function AIChatPage() {
  const {
    messages,
    input,
    setInput,
    isLoading,
    inputFocus,
    scrollToMessagesEnd,
    handlePromptClick,
    handleSubmit,
  } = useChat();

  return (
    <div className="flex min-h-screen flex-col rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 px-10">
      <ChatHeader />

      <div className="flex flex-col justify-start gap-2 rounded-t-2xl border-b border-gray-200 bg-white p-8">
        {messages.length <= 1 && (
          <PredefinedPrompts onPromptClick={handlePromptClick} />
        )}

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            messageText={message.text}
            isBot={message.isBot}
          />
        ))}

        {isLoading && <LoadingMessage />}

        <div ref={scrollToMessagesEnd} />
      </div>

      <ChatInput
        inputFocus={inputFocus}
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Powered by Google Gemini AI</p>
      </div>
    </div>
  );
}

export default AIChatPage;
