import Button from "../../../shared/ui/Button";
import InputField from "../../../shared/ui/InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../shared/utilities/iconUtils";

function LoginForm({
  formData,
  isLoading,
  validateErrors,
  showPassword,
  onInputChange,
  onSubmit,
  onShowPassword,
  isFormValid,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="py mx-[8rem] my-10 flex w-[40rem] flex-col gap-[2rem] rounded-[7px] bg-blue-100 px-12 py-8"
    >
      <div>
        <InputField
          id="cccd"
          htmlFor="cccd"
          label="Số CCCD"
          placeholder="Nhập CCCD"
          autoComplete="on"
          value={formData?.cccd}
          onChange={(e) => onInputChange("cccd", e.target.value)}
          disabled={isLoading}
          maxLength={12}
        />
        {validateErrors.cccd && (
          <p className="mt-1 text-sm text-red-600">{validateErrors.cccd}</p>
        )}
      </div>
      <div>
        <div className="relative">
          <InputField
            id="password"
            htmlFor="password"
            label="Mật khẩu"
            type={showPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu"
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => onInputChange("password", e.target.value)}
            disabled={isLoading}
          />

          <button
            type="button"
            className="top-10.5 absolute right-3 text-sm text-blue-700 hover:text-blue-800"
            onClick={() => onShowPassword(!showPassword)}
            disabled={isLoading}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={iconMap.eye} />
            ) : (
              <FontAwesomeIcon icon={iconMap.eyeSlash} />
            )}
          </button>
        </div>

        {validateErrors.password && (
          <p className="mt-1 text-sm text-red-600">{validateErrors.password}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" disabled={!isFormValid}>
          {isLoading ? "Đang đăng nhập" : "Đăng nhập"}
        </Button>

        <button
          type="button"
          className="font-medium text-blue-700 hover:underline"
          disabled={isLoading}
        >
          Quên mật khẩu?
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
