import Button from "../../../shared/ui/Button";
import {
  testSection,
  mock_answer,
  mock_section4_context,
} from "../../../shared/constants/examTestConfig";

function QuestionDisplay({
  selectedSection,
  currentQuestion,
  onPrevious,
  onNext,
  answers,
  onAnswerChange,
}) {
  const section = testSection[selectedSection];
  const isFirstQuestion = currentQuestion === section.startQuestion;
  const isLastQuestion = currentQuestion === section.lastQuestion;

  const renderQuestionContent = () => {
    if (selectedSection === 4) {
      return (
        <>
          <div className="mb-4 rounded-lg border-l-4 border-black bg-[#F0F7FF] p-4">
            <p className="mb-2 font-bold text-[#0056B3]">
              DỰA VÀO THÔNG TIN DƯỚI ĐÂY ĐỂ TRẢ LỜI CÁC CÂU TỪ {currentQuestion}{" "}
              ĐẾN {currentQuestion + 3}
            </p>
            <p className="text-[1rem] text-black">{mock_section4_context}</p>
          </div>

          <p className="mb-4 text-[1rem] text-black">
            Dựa vào đoạn văn về một trường và biên độ khí hậu, hãy phân tích...?
          </p>
        </>
      );
    }

    return (
      <p className="mb-4 text-[1rem] text-black">
        Đây là nội dung câu hỏi mẫu cho mục đích minh họa. Đâu là câu trả lời
        đúng cho tình huống này?
      </p>
    );
  };

  return (
    <div className="rounded-[8px] bg-white p-4 shadow-md">
      <h2 className="mb-4 text-[1.25rem] font-medium text-[#0056B3]">
        Câu {currentQuestion}
      </h2>

      <div>
        {renderQuestionContent()}

        <div className="space-y-[11px]">
          {mock_answer.map((answer, index) => (
            <label
              key={index}
              name={answer}
              className={`flex h-10 cursor-pointer items-center rounded border ${
                answers[currentQuestion] === index
                  ? "border-[#0056B3] bg-[#F0F7FF]"
                  : "border-gray-300"
              }`}
            >
              <div className="mx-3">
                <input
                  type="radio"
                  name="answer"
                  className="mr-3"
                  checked={answers[currentQuestion] === index}
                  onChange={() => onAnswerChange(index)}
                />
                <span className="text-[16px] text-gray-700">{answer}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <Button onClick={onPrevious} disabled={isFirstQuestion}>
          Câu trước
        </Button>
        <Button onClick={onNext} disabled={isLastQuestion}>
          Câu sau
        </Button>
      </div>
    </div>
  );
}

export default QuestionDisplay;
