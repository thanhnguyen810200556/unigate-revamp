import ContactHeading from "../components/ContactHeading";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import SuccessModal from "../components/SuccessModal";
import { useState } from "react";

function ContactPage() {
  const [isSuccessModal, setSuccessModal] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    text: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setSuccessModal(true);
  }

  function handleCloseSuccessModal() {
    setSuccessModal(false);
    setForm({
      fullName: "",
      email: "",
      subject: "",
      text: "",
    });
  }

  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-50 px-16 py-16">
      <ContactHeading />

      <div className="flex gap-10 pt-10">
        <ContactInfo />
        <ContactForm
          form={form}
          onForm={handleForm}
          onFormSubmit={handleFormSubmit}
        />
      </div>

      <SuccessModal
        isOpen={isSuccessModal}
        onCloseSuccessModal={handleCloseSuccessModal}
      />
    </main>
  );
}

export default ContactPage;
