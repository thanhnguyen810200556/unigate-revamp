import HeroSection from "../components/HeroSection";
import AdmissionSection from "../components/AdmissionSection";
import ExamOverview from "../components/ExamOverviewSection";
import GuidelineSection from "../components/GuidelineSection";
import NewsSection from "../components/NewsSection";
import { useRef } from "react";

function HomePage() {
  const admissionRef = useRef(null);

  const handleRefScroll = () => {
    admissionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroSection onRefScroll={handleRefScroll} />
      <AdmissionSection ref={admissionRef} />
      <ExamOverview />
      <GuidelineSection />
      <NewsSection />
    </div>
  );
}

export default HomePage;
