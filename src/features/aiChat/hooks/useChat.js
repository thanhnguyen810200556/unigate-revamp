import { useState, useRef, useEffect } from "react";
import { callGeminiAPI } from "../api/callGeminiAPI";
export function useChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Chào bạn! Tôi là cố vấn tuyển sinh và học tập của bạn.\n\nTôi sẽ hỗ trợ bạn trong:\n• Chọn ngành học phù hợp.\n• Tư vấn, hướng dẫn xét tuyển Đại học.\n• Chia sẻ mẹo học tập và hỗ trợ luyện đề.\n• Định hướng nghề nghiệp tương lai.\n\nBạn muốn tìm hiểu về nội dung nào?",
      isBot: true,
    },
  ]);
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
    setInput("");
    setIsLoading(true);

    try {
      const botResponse = await callGeminiAPI(messageText.trim());
      const botMessage = { id: Date.now() + 1, text: botResponse, isBot: true };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error in message: ", err);
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
  };
}
