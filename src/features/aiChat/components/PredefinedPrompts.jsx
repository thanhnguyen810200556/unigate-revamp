import { predefinedPrompts } from "../../../mocks/predefinedPrompts";

function PredefinedPrompts({ onPromptClick }) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-sm font-medium text-gray-700">Câu hỏi nhanh:</h3>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {predefinedPrompts.map((prompt) => (
          <button
            key={prompt.id}
            onClick={() => onPromptClick(prompt.text)}
            className="group flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3 text-left text-sm transition-colors hover:bg-gray-100"
          >
            <div className="text-blue-500 group-hover:text-blue-600">
              {prompt.icon}
            </div>
            <span className="text-gray-700 group-hover:text-gray-900">
              {prompt.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PredefinedPrompts;
