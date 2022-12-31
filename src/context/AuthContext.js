// src/context/auth-context.js
import { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthContext = createContext();

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  // Login User
  const login = async ({ email, password }) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = {
      email,
      password,
    };

    try {
      const { data: accessResponse } = await axios.post(
        "http://localhost:3000/api/login/",
        body,
        config
      );

      if (accessResponse && accessResponse.user) {
        setUser(accessResponse.user);
      }
      if (accessResponse && accessResponse.access) {
        setAccessToken(accessResponse.access);
      }

      router.push("/");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
        return;
      } else if (error.request) {
        setError('Something went wrong!');
        return;
      } else {
        setError("Something went wrong!");
        return;
      }
      console.error('Error: ', error.message);
      setError('Something went wrong')
      return;
    }

    // console.log(data)
  };

  const loginUser = async ({ email, password }) => {
    // e.preventDefault();
    console.log("Form Submitted");
    console.log("Login Context: ", { email, password });
    // let response = fetch("http://127.0.0.1:8000/api/token/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username: null, password: null }),
    // });
  };

  let contextData = {
    user: user,
    accessToken: accessToken,
    error: error,
    login: login,
    loginUser: loginUser,
  };

  // return <Provider value={contextData}>{children}</Provider>;
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
