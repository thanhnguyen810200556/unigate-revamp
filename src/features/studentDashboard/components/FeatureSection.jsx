import FeatureCard from "./FeatureCard";
import { dashboardFeatures } from "../../../shared/constants/dashboardFeatures";
const data = [...dashboardFeatures];

function FeatureSection() {
  return (
    <div className="mt-10 flex h-[10rem] w-[48rem] flex-col">
      <div className="mb-2 text-[20px] font-medium text-[#0056B3]">
        Trải nghiệm ôn luyện và tư vấn
      </div>
      <div className="flex flex-1 gap-10">
        {data.map((data) => (
          <FeatureCard
            key={data.id}
            title={data.title}
            description={data.description}
            buttonLabel={data.buttonLabel}
            icon={data.icon}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
