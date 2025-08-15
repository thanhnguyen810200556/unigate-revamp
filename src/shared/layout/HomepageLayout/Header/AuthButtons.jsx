import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import { useAuth } from "../../../../contexts/FakeAuthContext";
import User from "../../DashboardLayout/TopBar/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../utilities/iconUtils";

function AuthButtons() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <div className="flex items-center gap-3">
          <User />
          <Link to="/dashboard/home">
            <Button size="sm" className="rounded-full">
              Trở về <FontAwesomeIcon icon={iconMap["arrowRight"]} />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="secondary">Đăng nhập</Button>
          </Link>
          <Button variant="primary" onClick={() => alert("Register")}>
            Đăng ký
          </Button>
        </div>
      )}
    </>
  );
}

export default AuthButtons;
