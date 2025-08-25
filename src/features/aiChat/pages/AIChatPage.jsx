import ChatHeader from "../components/ChatHeader";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import PredefinedPrompts from "../components/predefinedPrompts";
import LoadingMessage from "../components/LoadingMessage";
import { useChat } from "../hooks/useChat";
import ChatHistory from "../components/ChatHistory";
import { useEffect, useState } from "react";

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
    handleNewChatClick,
    chatHistory,
    currentChatId,
    loadChatFromHistory,
    deleteChatFromHistory,
  } = useChat();

  const [selectedChat, setSelectedChat] = useState(null);

  function handleSelectedChat(chat) {
    if (!chat) return;

    loadChatFromHistory(chat);
    setSelectedChat(chat);
  }

  function handleDeletedChat(chatId) {
    deleteChatFromHistory(chatId);

    if (selectedChat && selectedChat.id === chatId) {
      setSelectedChat(null);
    }
  }

  useEffect(() => {
    if (currentChatId && chatHistory.length > 0) {
      const currentChat = chatHistory.find((chat) => chat.id === currentChatId);
      if (currentChat) {
        setSelectedChat(currentChat);
      }
    } else if (!currentChatId) {
      setSelectedChat(null);
    }
  }, [currentChatId, chatHistory]);

  return (
    <div className="flex min-h-screen flex-col rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 px-10">
      <ChatHeader />

      <div className="flex flex-1 gap-2">
        <ChatHistory
          onNewChatClick={handleNewChatClick}
          chatHistory={chatHistory}
          currentChatId={currentChatId}
          onSelectedChat={handleSelectedChat}
          onDeletedChat={handleDeletedChat}
        />

        <div className="flex flex-1 flex-col">
          <div className="h-[505px] justify-start gap-2 overflow-y-scroll rounded-t-2xl border-b border-gray-200 bg-white p-8">
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
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Powered by Google Gemini AI</p>
      </div>
    </div>
  );
}

export default AIChatPage;
