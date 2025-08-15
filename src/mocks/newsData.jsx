import huongDanImg from "../shared/assets/images/huongDan.jpg";
import taiLieuImg from "../shared/assets/images/taiLieu.jpg";
import thongBaoImg1 from "../shared/assets/images/thongBao.png";
import thongBaoImg2 from "../shared/assets/images/thong-bao.png";

export const newsData = [
  {
    id: "1",
    badge: "QUAN TRỌNG",
    badgeColor: "bg-blue-500",
    category: "Kỳ thi",
    imageText: "Thi ĐGNL",
    image: thongBaoImg1,
    date: "15/04/2025",
    title: "Lịch thi ĐGNL đợt 1 năm 2025 chính thức",
    excerpt:
      "Thông báo lịch thi chi tiết các ngày thi đợt 1 kỳ thi ĐGNL ĐHQG TP.HCM năm 2025.",
    link: "/news/1",
    content: `
      <h2 class="mb-4 border-l-4 border-blue-500 pl-4 text-2xl font-bold text-[#0056B3]">
        Thông tin lịch thi ĐGNL 2025
      </h2>
      <p class="mb-6 leading-relaxed text-gray-700">
        Kỳ thi Đánh giá năng lực (ĐGNL) ĐHQG TP.HCM năm 2025 đợt 1 sẽ được tổ chức từ ngày 15/6/2025 đến 22/6/2025. 
        Đây là kỳ thi quan trọng giúp các thí sinh có cơ hội xét tuyển vào các trường đại học thành viên.
      </p>
      
      <h2 class="mb-4 border-l-4 border-blue-500 pl-4 text-2xl font-bold text-[#0056B3]">
        Lưu ý quan trọng
      </h2>
      <p class="mb-6 leading-relaxed text-gray-700">
        Thí sinh cần chuẩn bị đầy đủ giấy tờ tùy thân, thẻ dự thi và các dụng cụ cần thiết. 
        Tuyệt đối không mang điện thoại di động và các thiết bị điện tử vào phòng thi.
      </p>
    `,
    author: "Ban Tuyển sinh ĐHQG TP.HCM",
  },
  {
    id: "2",
    badge: "MỚI",
    badgeColor: "bg-blue-500",
    category: "Kỳ thi",
    imageText: "Hồ sơ",
    image: huongDanImg,
    date: "10/04/2025",
    title: "Hướng dẫn đăng ký thi ĐGNL 2025",
    excerpt:
      "Hướng dẫn chi tiết quy trình đăng ký dự thi, những giấy tờ quan trọng cần chuẩn bị và thời gian biểu cụ thể.",
    link: "/news/2",
    content: `
      <h2 class="mb-4 border-l-4 border-blue-500 pl-4 text-2xl font-bold text-[#0056B3]">
        Quy trình đăng ký thi ĐGNL
      </h2>
      <p class="mb-6 leading-relaxed text-gray-700">
        Việc đăng ký thi ĐGNL được thực hiện hoàn toàn trực tuyến qua website chính thức. 
        Thí sinh cần tạo tài khoản, điền thông tin cá nhân và tải lên các giấy tờ cần thiết.
      </p>
      
      <h2 class="mb-4 border-l-4 border-blue-500 pl-4 text-2xl font-bold text-[#0056B3]">
        Giấy tờ cần chuẩn bị
      </h2>
      <p class="mb-6 leading-relaxed text-gray-700">
        - Chứng minh nhân dân hoặc căn cước công dân<br>
        - Học bạ THPT (bản photo công chứng)<br>
        - Giấy chứng nhận tốt nghiệp THPT tạm thời<br>
        - Ảnh 3x4 chụp trong vòng 6 tháng
      </p>
    `,
    author: "Phòng Đào tạo ĐHQG TP.HCM",
  },
  {
    id: "3",
    badge: "QUAN TRỌNG",
    badgeColor: "bg-blue-500",
    category: "Học thuật",
    imageText: "Tài liệu",
    image: taiLieuImg,
    date: "05/04/2025",
    title: "Tài liệu ôn thi ĐGNL năm 2025",
    excerpt:
      "Cập nhật bộ tài liệu ôn tập chính thức từ các trường thành viên ĐHQG TP.HCM.",
    link: "/news/3",
    content: `
      <h2 class="mb-4 border-l-4 border-blue-500 pl-4 text-2xl font-bold text-[#0056B3]">
        Bộ tài liệu ôn tập chính thức
      </h2>
      <p class="mb-6 leading-relaxed text-gray-700">
        Bộ tài liệu ôn tập được biên soạn bởi các giảng viên hàng đầu từ các trường thành viên, 
        đảm bảo chất lượng và sát với nội dung thi thực tế.
      </p>
      
      <h2 class="mb-4 border-l-4 border-blue-500 pl-4 text-2xl font-bold text-[#0056B3]">
        Cách sử dụng tài liệu hiệu quả
      </h2>
      <p class="mb-6 leading-relaxed text-gray-700">
        Học sinh nên lập kế hoạch ôn tập chi tiết, phân bổ thời gian hợp lý cho từng môn học. 
        Thực hành thường xuyên với các đề thi mẫu để làm quen với format và thời gian làm bài.
      </p>
    `,
    author: "ĐHQG TP.HCM",
  },
  {
    id: "4",
    badge: "MỚI",
    badgeColor: "bg-blue-500",
    category: "Tuyển sinh",
    imageText: "Xét tuyển",
    image: thongBaoImg2,
    date: "01/04/2025",
    title: "Chỉ tiêu xét tuyển các trường 2025",
    excerpt:
      "Thông báo chỉ tiêu tuyển sinh bằng kết quả thi ĐGNL của các trường thành viên.",
    link: "/news/4",
    content: `
      <h2 class="mb-4 border-l-4 border-blue-500 pl-4 text-2xl font-bold text-[#0056B3]">
        Chỉ tiêu tuyển sinh 2025
      </h2>
      <p class="mb-6 leading-relaxed text-gray-700">
        Các trường thành viên ĐHQG TP.HCM đã công bố chỉ tiêu tuyển sinh cho năm 2025. 
        Tổng chỉ tiêu tăng 5% so với năm trước, tạo nhiều cơ hội hơn cho thí sinh.
      </p>
      
      <h2 class="mb-4 border-l-4 border-blue-500 pl-4 text-2xl font-bold text-[#0056B3]">
        Điểm chuẩn dự kiến
      </h2>
      <p class="mb-6 leading-relaxed text-gray-700">
        Dựa trên xu hướng những năm gần đây, điểm chuẩn các ngành hot như Công nghệ thông tin, 
        Y khoa dự kiến sẽ dao động trong khoảng 900-950 điểm ĐGNL.
      </p>
    `,
    author: "Phòng Tuyển sinh ĐHQG TP.HCM",
  },
];
