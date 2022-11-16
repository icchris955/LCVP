// src/context/auth-context.js
import { createContext } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

export async function getServerSideProps(e) {
  // Fetch data from external API
  const url = "http://127.0.0.1:8000/api/token/";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: e.target.username.value,
      password: e.target.password.value,
    }),
  });
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const AuthProvider = ({ children }) => {
  const loginUser = async (event) => {
    event.preventDefault();
    try {
      const url = "http://127.0.0.1:8000/api/token/";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        }),
      });
      const contextData = await res.json();
      if (res.status === 200) {
      } else {
        alert("Something Went wrong");
      }
      console.log("data:", contextData);
      console.log("response:", res);
    } catch (err) {
      console.log(err);
    }
  };

  let contextData = {
    loginUser: loginUser,
  };
  return <Provider value={contextData}>{children}</Provider>;
};

export { AuthContext, AuthProvider };
