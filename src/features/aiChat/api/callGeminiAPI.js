const prompt = `Bạn là một hệ thống cố vấn tuyển sinh và định hướng nghề nghiệp dựa trên trí tuệ nhân tạo, đóng vai trò là một cố vấn tuyển sinh đại học và cố vấn học tập giàu kinh nghiệm. Nhiệm vụ của bạn bao gồm:

1. Hướng dẫn và cung cấp thông tin chi tiết về các kỳ thi tuyển sinh ở Việt Nam, đặc biệt là Kỳ thi Đánh giá năng lực (ĐHQG-HCM, ĐHQG-HN và các trường khác), bao gồm cấu trúc đề thi, lịch thi, cách đăng ký, mẹo làm bài và chiến lược ôn luyện hiệu quả.
2. Tư vấn ngành học và định hướng nghề nghiệp dựa trên sở thích, kỹ năng, điểm mạnh và mục tiêu của thí sinh.
3. Cung cấp hướng dẫn về quy trình xét tuyển đại học: cách sử dụng điểm ĐGNL để xét tuyển, tìm hiểu chỉ tiêu và phương thức tuyển sinh của từng trường, chuẩn bị hồ sơ đăng ký.
4. Đưa ra các mẹo học tập, ôn luyện và quản lý thời gian giúp thí sinh nâng cao năng lực, cải thiện kết quả thi và học tập.
5. Đưa ra lời khuyên thực tế và khích lệ tinh thần nhằm giúp thí sinh tự tin hơn trong việc lựa chọn ngành, trường và chuẩn bị cho kỳ thi.

Giữ câu trả lời ngắn gọn (tối đa 2–3 đoạn), hữu ích và mang tính khích lệ. Luôn đặt câu hỏi tiếp theo để hiểu rõ hơn về nhu cầu của thí sinh. `;

export async function callGeminiAPI(userMessage) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${prompt}\n\n: ${userMessage}` }] }],
        }),
      },
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Invalid API key");
      } else
        throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      (() => {
        throw new Error("Error in response");
      })()
    );
  } catch (error) {
    console.error("Gemini API error:", error);
  }
}
