import QuestionDisplay from "../components/QuestionDisplay";
import QuestionPagination from "../components/QuestionPagination";
import SectionSidebar from "../components/SectionSidebar";
import TestHeader from "../components/TestHeader";
import SubmitModal from "../components/SubmitModal";
import ExitModal from "../components/ExitModal";
import ResultModal from "../components/ResultModal";

import { test } from "../../../shared/constants/examTestConfig";

import { useExamTest } from "../hooks/useExamTest";

function ExamTest() {
  const {
    // State
    selectedSection,
    currentQuestion,
    answers,
    isSubmitModalOpen,
    isExitModalOpen,
    isResultModalOpen,

    // Computed values
    curQuestionsPerSection,
    answeredQuestions,
    unansweredQuestions,
    correctAnswers,
    answeredPerSection,
    timeLeft,

    // Handlers
    handleSectionClick,
    handlerPrevious,
    handleNext,
    handleQuestionClick,
    handleAnswers,
    openSubmitModal,
    closeSubmitModal,
    handleSubmit,
    openExitModal,
    closeExitModal,
    handleExit,
    closeResultModal,
    handleReview,
    handleGoToDB,
  } = useExamTest();

  return (
    <div className="min-h-screen bg-gray-100">
      <TestHeader
        answeredQuestions={Number(answeredQuestions)}
        totalQuestions={test.TOTAL_QUESTIONS}
        timeLeft={timeLeft}
        onExit={openExitModal}
      />

      <main className="flex justify-center p-6 pt-[4.5rem]">
        <SectionSidebar
          selectedSection={selectedSection}
          onSectionClick={handleSectionClick}
        />

        <div className="flex w-3/4 flex-col gap-5">
          <QuestionDisplay
            selectedSection={selectedSection}
            currentQuestion={currentQuestion}
            onPrevious={handlerPrevious}
            onNext={handleNext}
            answers={answers}
            onAnswerChange={handleAnswers}
          />

          <QuestionPagination
            currentQuestion={currentQuestion}
            onQuestionClick={handleQuestionClick}
            questions={curQuestionsPerSection}
            answers={answers}
            onSubmit={openSubmitModal}
          />
        </div>
      </main>

      <ExitModal
        isOpen={isExitModalOpen}
        onClose={closeExitModal}
        onExit={handleExit}
      />

      <SubmitModal
        isOpen={isSubmitModalOpen}
        unansweredQuestions={unansweredQuestions}
        onClose={closeSubmitModal}
        onSubmit={handleSubmit}
      />

      <ResultModal
        isOpen={isResultModalOpen}
        totalQuestions={test.TOTAL_QUESTIONS}
        correctAnswers={correctAnswers}
        answeredPerSection={answeredPerSection}
        onClose={closeResultModal}
        onReview={handleReview}
        onGoToDB={handleGoToDB}
      />
    </div>
  );
}

export default ExamTest;
