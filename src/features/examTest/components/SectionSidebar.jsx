import { testSection } from "../../../shared/constants/examTestConfig";

function SectionSidebar({ selectedSection, onSectionClick }) {
  const testSidebar = Object.values(testSection);
  return (
    <div className="ml-[2.25rem] mr-6 w-[15rem] rounded-[8px] bg-white p-4 shadow-md">
      <h2 className="mb-4 text-[1.25rem] font-medium text-[#0056b3]">
        Phần thi
      </h2>
      <hr className="mb-4 border-gray-300" />
      <div className="space-y-2">
        {testSidebar.map((section) => (
          <div
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`cursor-pointer rounded p-3 ${
              selectedSection === section.id
                ? "bg-[#F0F7FF] text-[#0056B3]"
                : "text-gray-700"
            }`}
          >
            <p className="font-medium text-[rem]">{section.name}</p>
            <p className="text-[0.75rem] text-[#666666]">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionSidebar;
