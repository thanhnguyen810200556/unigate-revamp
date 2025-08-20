function Button(props) {
  const {
    variant = "primary",
    size = "md",
    disabled = false,
    onClick,
    className = "",
    children,
  } = props;

  const base =
    "font-medium rounded cursor-pointer transition-colors focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#0056B3] text-white hover:bg-[#004A9C] focus:ring-[#0056B3]",
    lightPrimary:
      "bg-[#53A4FD] text-white hover:bg-[#4888CF] focus:ring-[#53A4FD]",
    secondary:
      "text-[#0056B3] border border-[#0056B3] bg-white hover:bg-[#E6F0FF] focus:ring-[#0056B3]",
    ghost:
      "text-gray-600 hover:text-[#0056B3] hover:bg-gray-50 focus:ring-[#0056B3]",
    gray: "text-black bg-gray-100 hover:bg-gray-100",
    NA: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  };

  const sizes = {
    ns: "text-sm",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
