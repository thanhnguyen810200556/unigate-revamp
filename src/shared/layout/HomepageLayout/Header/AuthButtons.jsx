import { Link } from "react-router-dom";
import Button from "../../../ui/Button";

function AuthButtons() {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/login">
        <Button variant="secondary">Đăng nhập</Button>
      </Link>
      <Button variant="primary" onClick={() => alert("Register")}>
        Đăng ký
      </Button>
    </div>
  );
}

export default AuthButtons;
