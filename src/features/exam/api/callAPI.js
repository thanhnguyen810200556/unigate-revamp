import { candidatesExamResult } from "../../../mocks/candidatesExamResult";
import { evaluateCandidate } from "../utils/scoring";
import majors from "../data/majors2024.json";
import { subjects } from "../../../shared/constants/subjects";

const candidatesResult = [...candidatesExamResult];
const result = evaluateCandidate(candidatesResult[0], majors, subjects);

const prompt = `Bạn là một hệ thống cố vấn tuyển sinh và định hướng nghề nghiệp dựa trên trí tuệ nhân tạo, đóng vai trò là một cố vấn tuyển sinh đại học và cố vấn học tập giàu kinh nghiệm. Nhiệm vụ của bạn bao gồm:
Hãy phân tích danh sách ngành học sau và đưa ra gợi ý phù hợp nhất cho học sinh.

DỮ LIỆU:
- student: gồm scoresNormalized theo thang 0–100 cho các môn (vietnamese, english, math, logic, science) và total.
- majorsResult: mảng ngành, mỗi phần tử có { id/maNganh, tenNganh, tenTruong, diemChuan (số hoặc null), fitScore (0–100), eligible (bool) }.

**Dữ liệu đầu vào:** 
${JSON.stringify(result)}

**Yêu cầu:**
1. Chọn 5 ngành có:
    - các ngành học thuộc các lĩnh vực phát triển nhanh hiện tại, bao gồm:  
        - Các lĩnh vực như công nghệ thông tin, trí tuệ nhân tạo, y tế, năng lượng tái tạo, hoặc các ngành có xu hướng phát triển mạnh (dựa trên báo cáo thị trường lao động hoặc xu hướng công nghệ trong 3 năm gần nhất).  
        - Có nhu cầu tuyển dụng cao (theo thống kê thị trường lao động trong 3 năm gần nhất).  
        - Mức lương trung bình khởi điểm trên thị trường từ khá trở lên (theo dữ liệu ngành nghề hiện tại).
    -  Điểm tổng của thí sinh (candidateScores.total) bằng hoặc vượt điểm chuẩn của ngành.
    - Điểm tổng của thí sinh (candidateScores.total)  có thể thấp hơn điểm chuẩn của ngành 10 điểm, có nghĩa là diemChuan = candidateScores.total + 10 và chấp nhận eligible=false.
    - FitScore của thí sinh với ngành đạt tối thiểu 0.7
    - Trong số các ngành đáp ứng tiêu chí trên, nhưng không ưu tiên FitScore cao hơn các ngành thuộc lĩnh vực phát triển nhanh.
2. Nếu không đủ 5 ngành eligible, chỉ trả về số ngành hiện có và bổ sung gợi ý cách cải thiện điểm.

**Định dạng trả về JSON hợp lệ (chỉ trả về JSON, không kèm text ngoài JSON):**
{
  "recommendations": [
    {
      "id": "",
      "tenNganh": "...", 
      "tenTruong": "...",
      "fitScore": ...,
      "diemChuan": ...,
    }
  ],
  "summary": {
    "overview": "Kết luận: Nhận xét chung về khả năng của candidate (dựa trên các scores trong dữ liệu)",
    "advice": "Lời khuyên cụ thể cho việc chọn ngành (Ví dụ: các kỹ năng cần thiết phù hợp với ngành học, khuyên nên xem xét sở trường sở đoản, hoặc sở thích).",
  }
}

**Lưu ý:**
- Output sắp xếp theo giá trị fitScore từ cao đến thấp và nếu trùng fitScore thì ưu tiên theo điểm chuẩn.
- Reason phải giải thích cả fitScore và khả năng đậu
- Dùng ngôn ngữ dễ hiểu, phù hợp học sinh
`;

export async function callAPI() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      },
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Invalid API key");
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
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
