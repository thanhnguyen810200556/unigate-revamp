import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="absolute mb-auto w-full bg-[#0056B3] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Cột 1: Về chúng tôi */}
          <div>
            <h3 className="mb-6 border-b border-blue-400 pb-2 text-lg font-semibold">
              Về ĐHQG-TPHCM
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/gioi-thieu" className="hover:text-gray-200">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <a
                  href="https://vnuhcm.edu.vn/ve-dhqg-hcm/33393364/313364/373364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200"
                >
                  Các trường thành viên
                </a>
              </li>
              <li>
                <Link to="/tin-tuc-su-kien" className="hover:text-gray-200">
                  Tin tức & Sự kiện
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="hover:text-gray-200">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 2: Kì thi ĐGNL */}
          <div>
            <h3 className="mb-6 border-b border-blue-400 pb-2 text-lg font-semibold">
              Kì thi ĐGNL
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/thong-tin-ky-thi" className="hover:text-gray-200">
                  Thông tin kỳ thi
                </Link>
              </li>
              <li>
                <Link to="/lich-thi" className="hover:text-gray-200">
                  Lịch thi
                </Link>
              </li>
              <li>
                <Link to="/cau-truc-de-thi" className="hover:text-gray-200">
                  Cấu trúc đề thi
                </Link>
              </li>
              <li>
                <Link
                  to="/gioi-thieu/quy-che-thi"
                  className="hover:text-gray-200"
                >
                  Quy chế thi
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Xét tuyển */}
          <div>
            <h3 className="mb-6 border-b border-blue-400 pb-2 text-lg font-semibold">
              Xét tuyển
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/dang-ki-thi" className="hover:text-gray-200">
                  Đăng kí thi
                </Link>
              </li>
              <li>
                <Link to="/dang-ki-xet-tuyen" className="hover:text-gray-200">
                  Đăng kí xét tuyển
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Tài nguyên */}
          <div>
            <h3 className="mb-6 border-b border-blue-400 pb-2 text-lg font-semibold">
              Tài nguyên
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/thu-vien-so" className="hover:text-gray-200">
                  Thư viện số
                </Link>
              </li>
              <li>
                <Link to="/bai-thi-thu" className="hover:text-gray-200">
                  Bài thi thử
                </Link>
              </li>
              <li>
                <Link to="/dien-dan-hoc-tap" className="hover:text-gray-200">
                  Diễn đàn học tập
                </Link>
              </li>
              <li>
                <Link to="/hoi-dap-thuong-gap" className="hover:text-gray-200">
                  Hỏi đáp thường gặp
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 5: Kết nối với chúng tôi */}
          <div>
            <h3 className="mb-6 border-b border-blue-400 pb-2 text-lg font-semibold">
              Kết nối với chúng tôi
            </h3>
            <div className="flex space-x-3">
              <a
                href="mailto:contact@vnuhcm-unigate.edu.vn"
                className="rounded-full bg-white p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#0056B3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="https://facebook.com/vnuhcmunigate"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#0056B3]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Phần copyright */}
        <div className="mt-12 border-t border-blue-400 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} VNUHCM-UNIGATE | Cổng thông tin tuyển
            sinh thông minh ĐHQG TPHCM | Đăng ký bản quyền.
          </p>
        </div>
      </div>
    </footer>
  );
}
import React from "react";
export default Footer;
