import { useState, useRef, useEffect } from "react";
import { callGeminiAPI } from "../api/callGeminiAPI";

export function useChat() {
  const firstMessagesState = {
    id: 1,
    text: "Chào bạn! Tôi là cố vấn tuyển sinh và học tập của bạn.\n\nTôi sẽ hỗ trợ bạn trong:\n• Chọn ngành học phù hợp.\n• Tư vấn, hướng dẫn xét tuyển Đại học.\n• Chia sẻ mẹo học tập và hỗ trợ luyện đề.\n• Định hướng nghề nghiệp tương lai.\n\nBạn muốn tìm hiểu về nội dung nào?",
    isBot: true,
  };

  const loadChatHistory = () => {
    const savedChat = localStorage.getItem("chatHistory");
    return savedChat ? JSON.parse(savedChat) : [];
  };

  const [messages, setMessages] = useState([firstMessagesState]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [chatHistory, setChatHistory] = useState(loadChatHistory);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const scrollToMessagesEnd = useRef(null);
  const inputFocus = useRef(null);

  useEffect(() => {
    scrollToMessagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    inputFocus.current?.focus();
  }, []);

  async function handleSend(messageText = input) {
    if (!messageText.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: messageText.trim(),
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentChatId(userMessage.id);
    setInput("");
    setIsLoading(true);

    try {
      const botResponse = await callGeminiAPI(messageText.trim());
      const botMessage = { id: Date.now() + 1, text: botResponse, isBot: true };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error in message: ", err);

      const errorMessage = {
        id: Date.now() + 1,
        text: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.",
        isBot: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  function handlePromptClick(promptText) {
    handleSend(promptText);
  }

  function handleSubmit(e) {
    if (e) e.preventDefault();
    handleSend();
  }

  function handleNewChatClick() {
    setMessages([firstMessagesState]);
    setCurrentChatId(null);
  }

  function handleChatHistory(messages) {
    if (!messages || messages.length < 2) return;

    const firstUserMessage = messages.find((message) => !message.isBot);
    if (!firstUserMessage) return;

    const chat = {
      id: messages[1]?.id,
      title: messages[1]?.text,
      chatLog: messages,
    };

    setChatHistory((prev) => {
      const existChat = prev.find((exChat) => exChat.id === chat.id);

      const updatedChats = existChat
        ? prev.map((exChat) =>
            exChat.id === chat.id
              ? { ...exChat, chatLog: chat.chatLog }
              : exChat,
          )
        : [...prev, chat];

      //save chat
      localStorage.setItem("chatHistory", JSON.stringify(updatedChats));
      return updatedChats;
    });
  }

  function loadChatFromHistory(chat) {
    setMessages(chat.chatLog);
    setCurrentChatId(chat.id);
  }

  function deleteChatFromHistory(chatId) {
    setChatHistory((prev) => {
      const updatedChats = prev.filter((chat) => chat.id !== chatId);
      localStorage.setItem("chatHistory", JSON.stringify(updatedChats));
      return updatedChats;
    });

    if (currentChatId === chatId) {
      handleNewChatClick();
    }
  }

  useEffect(() => {
    handleChatHistory(messages);
  }, [messages, currentChatId]);

  return {
    messages,
    input,
    setInput,
    isLoading,
    inputFocus,
    scrollToMessagesEnd,
    handleSend,
    handlePromptClick,
    handleSubmit,
    handleNewChatClick,
    chatHistory,
    currentChatId,
    loadChatFromHistory,
    deleteChatFromHistory,
  };
}
