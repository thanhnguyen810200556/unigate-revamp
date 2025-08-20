import ExamRegistrationSection from "../components/ExamRegistrationSection";
import FeatureSection from "../components/FeatureSection";
import NewsPanel from "../components/NewsPanel";
import WelcomeBanner from "../components/WelcomeBanner";

function Dashboard() {
  return (
    <div>
      <WelcomeBanner />
      <div className="flex gap-5">
        <div>
          <FeatureSection />
          <ExamRegistrationSection />
        </div>
        <NewsPanel />
      </div>
    </div>
  );
}

export default Dashboard;
