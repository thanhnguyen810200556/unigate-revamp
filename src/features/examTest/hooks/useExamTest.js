import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  calAnsweredPerSection,
  getQuestionForSection,
} from "../utils/testUtils";
import { useTestTimer } from "./useTestTimer";
import { test, testSection } from "../../../shared/constants/examTestConfig";

export function useExamTest() {
  const navigate = useNavigate();

  const [selectedSection, setSelectedSection] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});

  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const curQuestionsPerSection = getQuestionForSection(selectedSection);

  const answeredQuestions = Object.keys(answers).length;
  const unansweredQuestions = test.TOTAL_QUESTIONS - answeredQuestions;
  const correctAnswers = answeredQuestions;
  const answeredPerSection = calAnsweredPerSection(answers);

  const timeLeft = useTestTimer(() => {
    setIsResultModalOpen(true);
  });

  function handleSectionClick(sectionID) {
    setSelectedSection(sectionID);
    const section = testSection[sectionID];
    setCurrentQuestion(section.startQuestion);
  }

  function handlerPrevious() {
    const section = testSection[selectedSection];
    if (currentQuestion > section.startQuestion) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function handleNext() {
    const section = testSection[selectedSection];
    if (currentQuestion < section.endQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handleQuestionClick(questionNumber) {
    setCurrentQuestion(questionNumber);
  }

  function handleAnswers(index) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: index,
    }));
  }

  const openSubmitModal = () => setIsSubmitModalOpen(true);
  const closeSubmitModal = () => setIsSubmitModalOpen(false);
  const handleSubmit = () => {
    closeSubmitModal();
    setIsResultModalOpen(true);
  };

  const openExitModal = () => setIsExitModalOpen(true);
  const closeExitModal = () => setIsExitModalOpen(false);
  const handleExit = () => {
    closeExitModal();
    navigate("/dashboard/home");
  };

  const closeResultModal = () => setIsResultModalOpen(false);
  function handleReview() {
    closeResultModal();
    console.log("Xem lại bài làm:", answers);
  }
  function handleGoToDB() {
    closeResultModal();
    navigate("/dashboard/home");
  }

  return {
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
  };
}
