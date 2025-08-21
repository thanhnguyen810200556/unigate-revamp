import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../shared/utilities/iconUtils";

export const predefinedPrompts = [
  {
    id: 1,
    text: "Tôi muốn tìm hiểu ngành học phù hợp với sở thích của mình",
    icon: <FontAwesomeIcon icon={iconMap["bookOpen"]} className="h-4 w-4" />,
  },
  {
    id: 2,
    text: "Làm thế nào để chuẩn bị cho kì thi đánh giá năng lực",
    icon: (
      <FontAwesomeIcon icon={iconMap["graduationCap"]} className="h-4 w-4" />
    ),
  },
  {
    id: 3,
    text: "Ngành nào có nhu cầu nhân lực cao trong 5 năm tới?",
    icon: <FontAwesomeIcon icon={iconMap["lightbulb"]} className="h-4 w-4" />,
  },
  {
    id: 4,
    text: "Tôi quan tâm đến lĩnh vực chăm sóc sức khỏe thì nên học ngành gì?",
    icon: <FontAwesomeIcon icon={iconMap["bookOpen"]} className="h-4 w-4" />,
  },
];
