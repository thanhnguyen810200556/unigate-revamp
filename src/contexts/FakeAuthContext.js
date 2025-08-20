import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("user"),
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loginStart":
      return { ...state, isLoading: true, error: null };
    case "loginSuccess":
      localStorage.setItem("user", JSON.stringify(action.payload));
      console.log("Reducer received payload:", action.payload);
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "loginFalse":
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USERS = [
  {
    cccd: "012345678901",
    password: "qwerty123",
    name: "Nguyễn Văn A",
    avatar:
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/08/anh-con-meo-cute-7.jpg",
  },
  {
    cccd: "012345678902",
    password: "admin123",
    name: "Trần Thị B",
    avatar:
      "https://anhdep.edu.vn/upload/2024/08/bo-suu-tap-avatar-con-cho-sieu-dang-yeu-cho-mang-xa-hoi-4.webp",
  },
];

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function login(cccd, password) {
    dispatch({ type: "loginStart" });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const foundUser = FAKE_USERS.find(
      (user) => user.cccd === cccd && user.password === password,
    );

    if (foundUser) {
      const { password: _, ...userWithNoPassword } = foundUser;
      dispatch({ type: "loginSuccess", payload: userWithNoPassword });
    } else {
      dispatch({
        type: "loginFalse",
        payload: "Số CCCD hoặc mật khẩu không chính xác",
      });
    }

    {
      console.log("Found user:", foundUser);
    }
  }

  function logout() {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context was used outside AuthProvider");
  return context;
}

/* eslint-disable react-refresh/only-export-components */
export { AuthProvider, useAuth };

