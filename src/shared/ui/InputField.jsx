//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InputField({
  type = "text",
  id,
  htmlFor,
  label = "",
  icon,
  placeholder = "",
  className = "",
  inputClassName = "border border-gray-300 bg-white p-3 text-gray-800",
  value,
  onChange,
  autoComplete,
  maxLength,
  pattern,
  inputMode = "text",
  readOnly = false,
  error = "", // thông báo lỗi
  showError = false,
  required = false,
}) {
  const labelId = id || htmlFor;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Label */}
      {label && (
        <label htmlFor={labelId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* Input + Icon */}
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <FontAwesomeIcon icon={icon} className="h-5 w-5" />
          </div>
        )}

        <input
          id={labelId}
          name={labelId}
          type={type}
          readOnly={readOnly}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          maxLength={maxLength}
          pattern={pattern}
          inputMode={inputMode}
          className={`w-full rounded-lg transition-colors focus:outline-none focus:ring-2 ${icon ? "pl-10" : ""} ${
            showError && error
              ? "border-red-300 focus:border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
          } ${inputClassName}`}
        />
      </div>

      {showError && error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
