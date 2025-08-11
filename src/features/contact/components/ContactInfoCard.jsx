function ContactInfoCard({
  title,
  value,
  description,
  icon,
  bgColor = "bg-white",
}) {
  return (
    <div className="flex px-4">
      <li
        className={`${bgColor} group relative flex h-[7.75rem] w-[20.3rem] transform items-start overflow-hidden rounded-xl p-5 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-xl`}
      >
        <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-50"></div>
        <div className="mr-4 rounded-full bg-blue-100 p-3 text-[#0056B3] transition-all duration-300 group-hover:bg-[#0056B3] group-hover:text-white">
          {icon}
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-[#0056B3]">{title}</h3>
          {value ? (
            <>
              <p className="font-medium text-blue-600">{value}</p>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </>
          ) : (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
      </li>
    </div>
  );
}

export default ContactInfoCard;
