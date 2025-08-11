function ContactHeading() {
  return (
    <div className="flex transform flex-col items-center pt-16 transition-all duration-500 hover:scale-105">
      <div className="pb my-2 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
        <svg
          className="h-8 w-8 text-[#0056B3]"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
        </svg>
      </div>

      <h2 className="py-2 text-4xl font-extrabold text-[#0056B3]">
        Liên Hệ Với Chúng Tôi
      </h2>
      <p className="tex-lg mx-auto mt-2 pb-2 text-gray-600">
        Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ. Hãy liên hệ ngay khi bạn
        cần!
      </p>
    </div>
  );
}
export default ContactHeading;
