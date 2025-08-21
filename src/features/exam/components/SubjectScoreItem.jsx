import { useEffect, useState } from "react";

function SubjectScoreItem({ subjectsName, score, maxScore, delay = 0 }) {
  const percentage = (score / maxScore) * 100;
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, 100 + delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  function getScoreColor(percent) {
    if (percent >= 80) return "bg-[#059669]";
    if (percent >= 50) return "bg-amber-600";
    return "bg-red-600";
  }

  function getTextColor(percent) {
    if (percent >= 80) return "text-[#059669]";
    if (percent >= 50) return "text-amber-600";
    return "text-red-600";
  }

  return (
    <div className="mb-3 space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm duration-200">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-800">
            {subjectsName}
          </span>
          <span className={`text-md font-bold ${getTextColor(percentage)}`}>
            Điểm đạt được: {score}/{maxScore}
          </span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className={`score-bar h-2 rounded-full ${getScoreColor(percentage)} transition-all duration-1000 ease-out`}
            style={{ width: `${animatedWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SubjectScoreItem;
