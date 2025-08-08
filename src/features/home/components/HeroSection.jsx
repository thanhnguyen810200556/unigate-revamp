import dhqgImage from "../../../shared/assets/images/dhqg.jpg";
import Button from "../../../shared/ui/Button";

function HeroSection({ onRefScroll }) {
  return (
    <section className="flex min-h-screen bg-[#0056B3] pt-[88px] text-white">
      <div
        className="relative mx-auto my-auto w-[1200px] overflow-hidden rounded-xl shadow-lg"
        style={{
          backgroundImage: `url(${dhqgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.1)",
        }}
      >
        <div className="bg-[#0056B3]/35 px-6 py-16 text-center">
          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-5xl">
            Cổng thông tin <br /> tuyển sinh thông minh <br /> ĐHQG TP.HCM
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Nền tảng toàn diện cho thí sinh tham gia kỳ thi Đánh giá năng lực.
            Đăng ký dự thi, xét tuyển, tra cứu kết quả và nhận tư vấn ngành học
            phù hợp với năng lực của bạn.
          </p>

          <div>
            <div className="flex justify-center gap-10">
              <Button variant="secondary" onClick={() => alert("Register")}>
                Đăng kí dự thi
              </Button>
              <Button variant="lightPrimary" onClick={onRefScroll}>
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
