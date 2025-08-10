import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InputField({
  type = "text",
  htmlFor,
  label = "",
  icon,
  placeholder = "",
  className = "", //wrapper khung chứa input
  inputClassName = "border border-gray-300",
  value,
  onChange,
}) {
  return (
    <div className={`relative ${className}`}>
      {label ? (
        <label
          className="mb-2 block font-medium text-gray-700"
          htmlFor={`${htmlFor}`}
        >
          {label}
        </label>
      ) : null}
      <div className="relative gap-10">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <FontAwesomeIcon icon={icon} className="h-5 w-5" />
          </div>
        )}
        <input
          key={htmlFor}
          name={htmlFor}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-lg bg-white p-4 text-gray-800 ${icon ? "pl-10" : ""} ${inputClassName}`}
        />
      </div>
    </div>
  );
}

export default InputField;
