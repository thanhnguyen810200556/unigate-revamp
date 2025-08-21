import { iconMap } from "../../../shared/utilities/iconUtils";
import InputField from "../../../shared/ui/InputField";
import TextArea from "../../../shared/ui/TextArea";
import Button from "../../../shared/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm({ form, onForm, onFormSubmit }) {
  return (
    <form
      className="relative flex flex-col gap-5 overflow-hidden rounded-xl bg-white p-8 shadow-lg lg:col-span-2"
      onSubmit={onFormSubmit}
    >
      <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-blue-600 to-indigo-700"></div>
      <h2 className="text-2xl font-bold text-[#0056B3]">
        Gửi tin nhắn cho chúng tôi
      </h2>

      <div className="flex gap-6">
        <InputField
          id="fullName"
          name="fullName"
          htmlFor="fullName"
          label="Họ và Tên"
          icon={iconMap["user"]}
          placeholder="Nguyễn Văn A"
          value={form.fullName}
          onChange={onForm}
          required={true}
        />
        <InputField
          id="email"
          htmlFor="email"
          label="Email"
          icon={iconMap["envelope"]}
          placeholder="example@gamil.com"
          value={form.email}
          onChange={onForm}
          required={true}
        />
      </div>

      <InputField
        id="subject"
        htmlFor="subject"
        label="Chủ đề"
        icon={iconMap["comment"]}
        placeholder="Vui lòng nhập chủ đề"
        value={form.subject}
        onChange={onForm}
        required={true}
      />
      <TextArea
        id="paragraph"
        label="Nội dung"
        rows={5}
        icon={iconMap["paragraph"]}
        placeholder="Nhập nội dung tin nhắn của bạn"
        value={form.text}
        onChange={onForm}
        required={true}
      />
      <Button
        type="submit"
        className="gap-10 bg-gradient-to-r from-blue-600 to-indigo-700"
      >
        <span className="flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={iconMap.paperPlane} />
          Gửi tin nhắn
        </span>
      </Button>
    </form>
  );
}

export default ContactForm;
