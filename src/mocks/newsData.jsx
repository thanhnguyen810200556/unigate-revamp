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
    link: "/lich-thi",
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
    link: "/huong-dan-dang-ky",
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
    link: "/tai-lieu-on-thi",
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
    link: "/chi-tieu-tuyen-sinh",
  },
];
