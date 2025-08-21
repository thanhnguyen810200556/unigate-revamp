import Button from "../../../shared/ui/Button";
import { formatTime } from "../utils/testUtils";

function TestHeader({ answeredQuestions, totalQuestions, timeLeft, onExit }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[#0056B3] p-4 text-white">
      <h1 className="px-9 text-xl font-bold">Bài thi thử ĐGNL</h1>
      <div className="flex items-center justify-center gap-10">
        <span className="font-medium">{formatTime(timeLeft)}</span>
        <div className="font-bold">
          Đã trả lời: {answeredQuestions}/{totalQuestions}
        </div>
        <Button variant="danger" onClick={onExit}>
          <div className="flex items-center justify-center gap-0.5">Thoát</div>
        </Button>
      </div>
    </div>
  );
}

export default TestHeader;
