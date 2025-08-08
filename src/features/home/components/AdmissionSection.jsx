import { admissionData } from "../../../mocks/admissionData";
import { forwardRef } from "react";
import FeatureCard from "./AdmissionCard";
import studentImage3 from "../../../shared/assets/images/student3.jpg";
import groupStudent from "../../../shared/assets/images/groupStudent.jpg";

function AdmissionSection(props, admissionRef) {
  const data = [...admissionData];

  return (
    <section ref={admissionRef} className="bg-white py-16">
      <div className="gap-auto container mx-auto flex px-16">
        <div className="w-2xl relative mr-12">
          <img
            src={studentImage3}
            alt="student"
            className="h-100 relative left-[100px] top-[20px] w-[350px] rounded-lg object-cover shadow-lg"
          />

          <img
            src={groupStudent}
            alt="student"
            className="absolute bottom-[20px] right-[30px] h-60 w-[350px] rounded-lg object-cover shadow-lg"
          />

          <div className="absolute bottom-[50px] left-[180px] space-y-2">
            <div className="z-1 relative h-11 w-11 bg-[#0056B3]"></div>
            <div className="relative bottom-[30px] left-[10px] z-0 ml-2 h-11 w-11 bg-blue-300"></div>
          </div>
        </div>

        <div className="w-2xl mr-12 text-left">
          <h2 className="mb-6 text-5xl font-bold text-[#0056B3]">
            Nền tảng hỗ trợ toàn diện <br /> Kỳ thi và xét tuyển ĐGNL
          </h2>
          <p className="text-3 mb-4 text-gray-700">
            UNIGATE là nền tảng công nghệ hỗ trợ thí sinh trong suốt hành trình
            <br /> từ ôn luyện đến xét tuyển.
          </p>

          <div className="grid grid-cols-1 gap-1">
            {data.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconBgColor={feature.iconBgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(AdmissionSection);
