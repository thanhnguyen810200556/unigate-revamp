export const validateForm = (form) => {
  const newErrors = {};

  if (!form.fullName) {
    newErrors.fullName = "Vui lòng nhập họ và tên";
  }

  if (!form.email) {
    newErrors.email = "Vui lòng nhập email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Email không hợp lệ";
  }

  if (!form.subject) {
    newErrors.subject = "Vui lòng nhập chủ đề";
  }

  if (!form.message) {
    newErrors.message = "Vui lòng nhập nội dung";
  }

  return newErrors;
};
