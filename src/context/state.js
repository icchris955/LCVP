// src/context/auth-context.js
import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: "",
  });

  // store the user token in localStorage
  const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data.data);

    setAuthState({
      token,
    });
  };

  // checks if the user is authenticated or not by checking if there’s any JWToken in the browser’s localStorage
  const isUserAuthenticated = () => !!authState.token;

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
