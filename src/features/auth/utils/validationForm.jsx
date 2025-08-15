export const validateLoginForm = (formData) => {
  const errors = {};

  if (!formData.cccd?.trim()) {
    errors.cccd = "Vui lòng nhập số CCCD";
  } else if (!/^\d{12}$/.test(formData.cccd.trim())) {
    errors.cccd = "Số CCCD phải gồm 12 chữ số";
  }

  if (!formData.password?.trim()) {
    errors.password = "Vui lòng nhập mật khẩu";
  } else if (formData.password.trim().length < 6) {
    errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
  } else if (
    /[ăâơôđàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộùúủũụừứửữự]/i.test(
      formData.password,
    )
  ) {
    errors.password = "Mật khẩu không được chứa các ký tự có dấu";
  }

  return errors;
};

export const hasValidationErrors = (errors) => {
  return Object.keys(errors).length > 0;
};

export const formatCCCD = (value) => {
  const cleaned = value.replace(/\D/g, "");
  return cleaned.slice(0, 12);
};
