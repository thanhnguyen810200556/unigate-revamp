import { useRef, useState } from "react";
import { HiOutlineBell } from "react-icons/hi2";

function Notification() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  return (
    <div>
      <div className="relative" ref={notificationRef}>
        <button
          className="flex h-[2.2rem] w-[2.2rem] cursor-pointer items-center justify-center rounded-2xl hover:bg-gray-100 hover:text-[#0056B3]"
          onClick={() => setIsNotificationOpen(!isNotificationOpen)} // Toggle thông báo
        >
          <HiOutlineBell className="text-2xl" />
          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>
        {isNotificationOpen && (
          <div className="absolute right-0 z-50 mt-2 w-80 rounded-md bg-white py-2 shadow-lg">
            <h3 className="px-4 py-2 text-sm font-bold text-gray-700">
              Thông báo
            </h3>
            <ul className="divide-y divide-gray-200">
              <li className="px-4 py-2 text-sm text-gray-600">
                Bạn có kỳ thi sắp diễn ra vào ngày 01/06/2025.
              </li>
              <li className="px-4 py-2 text-sm text-gray-600">
                Hạn đăng ký kỳ thi ĐGNL đợt 2 kết thúc vào ngày 07/05/2024.
              </li>
              <li className="px-4 py-2 text-sm text-gray-600">
                Cập nhật hồ sơ cá nhân để hoàn tất đăng ký.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notification;
