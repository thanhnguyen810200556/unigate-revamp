import DemoAccount from "../components/DemoAccount";
import ErrorMessage from "../components/ErrorMessage";
import LoginForm from "../components/LoginForm";
import { useLoginForm } from "../hooks/useLoginForm";

function LoginPage() {
  const {
    formData,
    validateErrors,
    showPassword,
    isLoading,
    error,
    isFormValid,
    handleInputChange,
    handleSubmit,
    handleShowPassword,
  } = useLoginForm();
  return (
    <main className="mt-10 flex min-h-[calc(100vh-5rem)] w-full flex-col items-center bg-blue-50 py-10">
      <ErrorMessage error={error} />
      <LoginForm
        formData={formData}
        validateErrors={validateErrors}
        showPassword={showPassword}
        isLoading={isLoading}
        isFormValid={isFormValid}
        onInputChange={handleInputChange}
        onShowPassword={handleShowPassword}
        onSubmit={handleSubmit}
      />
      <DemoAccount />
    </main>
  );
}

export default LoginPage;
