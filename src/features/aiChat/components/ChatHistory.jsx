import Button from "../../../shared/ui/Button";
import { Edit } from "lucide-react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { useState } from "react";

function ChatHistory({
  onNewChatClick,
  chatHistory,
  onSelectedChat,
  currentChatId,
  onDeletedChat,
}) {
  const chatHistories = chatHistory.filter((chat) => chat.id !== undefined);

  const [deletingChatId, setDeletingChatId] = useState(null);

  const handleDeleteClick = (e, chatId) => {
    e.stopPropagation(); // Ngăn không cho trigger onSelectedChat
    setDeletingChatId(chatId);
  };

  const handleCloseModal = () => {
    setDeletingChatId(null);
  };

  const handleConfirmDelete = (chatId) => {
    onDeletedChat(chatId);
    setDeletingChatId(null);
  };

  return (
    <>
      <div className="flex w-1/4 shrink-0 flex-col justify-start gap-2 overflow-y-scroll rounded-2xl border-b border-gray-200 bg-white p-8">
        <Button variant="ghost" onClick={onNewChatClick}>
          <div className="flex items-center gap-2">
            <Edit size={15} /> New chat
          </div>
        </Button>

        <h1 className="border-b border-gray-200 p-1 text-gray-500">
          Lịch sử chat
        </h1>

        {chatHistories.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectedChat(chat)}
            className={`transition-color cursor-pointer p-2 text-sm ${currentChatId === chat.id ? "rounded-2xl border border-[#0056B3] text-[#0056B3]" : "text-gray-500"}`}
          >
            <div className="flex items-center">
              <p className="truncate">{chat.title} </p>
              <button
                onClick={(e) => handleDeleteClick(e, chat.id)}
                className="cursor-pointer text-xl hover:-translate-y-1 hover:text-red-600"
              >
                &times;
              </button>
            </div>
          </div>
        ))}

        <ConfirmDeleteModal
          isDeleteModalOpen={deletingChatId}
          onClose={handleCloseModal}
          onDeletedChat={handleConfirmDelete}
          chatId={deletingChatId}
        />
      </div>
    </>
  );
}

export default ChatHistory;
