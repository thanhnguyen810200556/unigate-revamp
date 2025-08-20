import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TextArea({
  label,
  icon,
  placeholder,
  id,
  rows = 3,
  required = false,
}) {
  return (
    <div className="relative">
      <label
        className="mb-2 block font-medium text-gray-700"
        htmlFor="description"
      >
        {label}
      </label>
      <div className="relative flex gap-10">
        <div className="pointer-events-none absolute left-0 p-4 pl-3 text-gray-400">
          <FontAwesomeIcon icon={icon} className="h-5 w-5" />
        </div>
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className="w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-gray-800"
        />
      </div>
    </div>
  );
}

export default TextArea;
