export function WorkingHours() {
  return (
    <div className="ml-4 flex h-[124px] w-[322.513px] flex-col justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-lg transition hover:-translate-y-2">
      <h3 className="mb-4 flex items-center text-xl font-semibold">
        <svg
          className="mr-2 h-5 w-5"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z" />
        </svg>
        Giờ làm việc
      </h3>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Thứ Hai - Thứ Sáu</span>
          <span className="font-semibold">8:00 - 17:00</span>
        </div>

        <div className="flex justify-between">
          <span>Thứ Bảy - Chủ Nhật</span>
          <span className="font-semibold">Nghỉ</span>
        </div>
      </div>
    </div>
  );
}

export default WorkingHours;
