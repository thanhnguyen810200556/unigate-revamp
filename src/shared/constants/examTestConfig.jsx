export const test = {
  TOTAL_QUESTIONS: 120,
  TOTAL_TIME: 9000,
  QUESTIONS_PER_SECTION: 30,
};

export const testSection = {
  1: {
    id: 1,
    name: "Phần 1: Tiếng Việt",
    description: "(Câu 1-30)",
    startQuestion: 1,
    endQuestion: 30,
  },
  2: {
    id: 2,
    name: "Phần 2: Tiếng Anh",
    description: "(Câu 31-60)",
    startQuestion: 31,
    endQuestion: 60,
  },
  3: {
    id: 3,
    name: "Phần 3: Toán học",
    description: "(Câu 61-90)",
    startQuestion: 61,
    endQuestion: 90,
  },
  4: {
    id: 4,
    name: "Phần 4: Tư duy khoa học",
    description: "(Câu 91-120)",
    startQuestion: 91,
    endQuestion: 120,
  },
};

export const mock_answer = [
  "Phương án A cho câu",
  "Phương án B cho câu",
  "Phương án C cho câu",
  "Phương án D cho câu",
];

export const mock_section4_context = `
Trong một nghiên cứu về một trường và biên độ khí hậu, các nhà khoa học đã phát hiện ra mối liên hệ giữa hoạt động con người và sự thay đổi của hệ sinh thái. Các dữ liệu thu thập được từ nhiều nguồn khác nhau cho thấy tác động đáng kể của việc phát thải khí nhà kính đối với nhiệt độ trái đất.
`;
