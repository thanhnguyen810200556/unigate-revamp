import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import {
  validateForm,
  hasValidationErrors,
  formatCCCD,
} from "../../../shared/utilities/validation";

export function useLoginForm() {
  const navigate = useNavigate();
  const { login, isLoading, error, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    cccd: "",
    password: "",
  });

  const [validateErrors, setValidateErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function handleInputChange(field, value) {
    let currValue = value;

    //Chỉ cho phép số và max = 12
    if (field === "cccd") {
      currValue = formatCCCD(value);
    }

    setFormData((prev) => ({ ...prev, [field]: currValue }));

    //reset thông báo lỗi mỗi khi gõ
    if (validateErrors[field]) {
      setValidateErrors((prev) => ({ ...prev, [field]: "" }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const errors = validateForm(formData);
    setValidateErrors(errors);

    if (hasValidationErrors(errors)) {
      return;
    }

    try {
      await login(formData.cccd, formData.password);
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/dashboard/home", { replace: true });
    },
    [isAuthenticated, navigate],
  );

  const isFormValid =
    formData.cccd.trim() && formData.password.trim() && !isLoading;

  return {
    formData,
    validateErrors,
    showPassword,
    isLoading,
    error,
    isFormValid,
    handleInputChange,
    handleSubmit,
    handleShowPassword,
  };
}
