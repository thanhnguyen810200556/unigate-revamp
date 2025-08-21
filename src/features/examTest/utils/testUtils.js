import { testSection } from "../../../shared/constants/examTestConfig";

export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function getQuestionForSection(sectionID) {
  const section = testSection[sectionID];
  if (!section) return [];

  return Array.from(
    { length: section.endQuestion - section.startQuestion + 1 },
    (_, i) => i + section.startQuestion,
  );
}

export function calAnsweredPerSection(answers) {
  const result = {};

  Object.keys(testSection).forEach((sectionID) => {
    const section = testSection[sectionID];
    result[sectionID] = Object.keys(answers).filter(
      (q) =>
        parseInt(q) >= section.startQuestion &&
        parseInt(q) <= section.endQuestion,
    ).length;
  });
  return result;
}

export const getSectionByQuestion = (questionNumber) => {
  return Object.values(testSection).find(
    (section) =>
      questionNumber >= section.startQuestion &&
      questionNumber <= section.endQuestion,
  );
};

export const isQuestionInSection = (questionNumber, sectionId) => {
  const section = testSection[sectionId];
  return (
    questionNumber >= section.startQuestion &&
    questionNumber <= section.endQuestion
  );
};
