import { infoData } from "../../../mocks/infoData";
import WorkingHours from "./WorkingHourCard";
import ContactInfoCard from "./ContactInfoCard";

const data = [...infoData];

function ContactInfo() {
  return (
    <ul className="space-y-7">
      {data.map((item) => (
        <ContactInfoCard
          key={item.id}
          title={item.title}
          value={item.value}
          description={item.description}
          icon={item.icon}
        />
      ))}
      <li>
        <WorkingHours />
      </li>
    </ul>
  );
}
export default ContactInfo;
