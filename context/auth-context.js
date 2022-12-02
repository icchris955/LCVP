import React from "react";
import { Router } from "react-router-dom";

import jwt_decode from "jwt-decode";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

function reducer(currentState, newState) {
  return { ...currentState, ...newState };
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (!context) throw new Error("useAuthState must be used in AuthProvider");

  return context;
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (!context) throw new Error("useAuthDispatch must be used in AuthProvider");

  return context;
}

const initialState = {
  status: "idle",
  user: "",
  pwd: "",
  error: null,
};

function AuthProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

const url = `${process.env.NEXT_PUBLIC_API_URL}/token/`;
async function doLogin(dispatch, user, pwd) {
  try {
    dispatch({ status: "pending" });

    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pwd,
      }),
    });
    const data = await result.json();
    dispatch({
      status: "resolved",
      user: jwt_decode(data.access),
      error: null,
    });
  } catch (error) {
    dispatch({ status: "rejected", error });
  }
}

function doLogout(dispatch) {
  dispatch(initialState);
  Router.push("/auth/login");
}

export { AuthProvider, useAuthState, useAuthDispatch, doLogin, doLogout };
