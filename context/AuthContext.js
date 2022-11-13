// src/context/auth-context.js
import { createContext } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const loginUser = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    // let response = fetch("http://127.0.0.1:8000/api/token/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username: null, password: null }),
    // });
  };

  let contextData = {
    loginUser: loginUser,
  };
  return <Provider value={contextData}>{children}</Provider>;
};

export { AuthContext, AuthProvider };
