function Modal({
  onClose,
  title,
  children,
  isCloseButton = false,
  className = "",
  classNameTitle = "",
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className={`w-full ${className} rounded-xl bg-white p-4 shadow-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className={`text-lg font-semibold ${classNameTitle}`}>{title}</h2>
          <button
            className="cursor-pointer text-3xl text-gray-500"
            onClick={onClose}
          >
            {isCloseButton ? "\u00D7" : ""}
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
// { onClose, title, children }
