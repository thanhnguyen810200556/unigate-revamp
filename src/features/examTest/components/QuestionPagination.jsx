import Button from "../../../shared/ui/Button";

function QuestionPagination({
  questions,
  currentQuestion,
  onQuestionClick,
  answers,
  onSubmit,
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex justify-end space-x-4">
        <div className="flex items-center">
          <span className="mr-2 h-4 w-4 rounded-full bg-gray-200"></span>
          <span>Chưa trả lời</span>
        </div>

        <div className="flex items-center">
          <span className="mr-2 h-4 w-4 rounded-full bg-[#0056B3]"></span>
          <span>Đã trả lời</span>
        </div>

        <div className="flex items-center">
          <span className="mr-2 h-4 w-4 rounded-full border-2 border-[#0056B3]"></span>
          <span>Câu hiện tại</span>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-10 gap-2">
        {questions.map((question) => (
          <Button
            key={question}
            onClick={() => onQuestionClick(question)}
            variant={`${question === currentQuestion ? "secondary" : answers[question] !== undefined ? "primary" : "NA"}`}
            className="flex h-10 w-20 items-center justify-center"
          >
            {question}
          </Button>
        ))}
      </div>

      <div className="mr-4 flex justify-end">
        <Button onClick={onSubmit}>Nộp bài</Button>
      </div>
    </div>
  );
}

export default QuestionPagination;
