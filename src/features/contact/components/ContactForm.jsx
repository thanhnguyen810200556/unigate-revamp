import { iconMap } from "../../../shared/utilities/iconUtils";
import InputField from "../../../shared/ui/InputField";
import TextArea from "../../../shared/ui/TextArea";
import Button from "../../../shared/ui/Button";

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
        />
        <InputField
          id="email"
          htmlFor="email"
          label="Email"
          icon={iconMap["envelope"]}
          placeholder="example@gamil.com"
          value={form.email}
          onChange={onForm}
        />
      </div>

      <InputField
        id={3}
        htmlFor="subject"
        label="Chủ đề"
        icon={iconMap["comment"]}
        placeholder="Vui lòng nhập chủ đề"
        value={form.subject}
        onChange={onForm}
      />
      <TextArea
        id={4}
        label="Nội dung"
        rows={5}
        icon={iconMap["paragraph"]}
        placeholder="Nhập nội dung tin nhắn của bạn"
        value={form.text}
        onChange={onForm}
      />
      <Button
        type="submit"
        className="gap-10 bg-gradient-to-r from-blue-600 to-indigo-700"
      >
        <span className="flex items-center justify-center">
          <svg
            className="mr-2 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
          Gửi tin nhắn
        </span>
      </Button>
    </form>
  );
}

export default ContactForm;
