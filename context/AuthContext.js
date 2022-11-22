// src/context/auth-context.js
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import useSWR from "swr";

const AuthContext = createContext();

// export async function getServerSideProps(e) {
//   // Fetch data from external API
//   const url = "http://127.0.0.1:8000/api/token/";
//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: e.target.username.value,
//       password: e.target.password.value,
//     }),
//   });
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [AuthTokens, setAuthTokens] = useState(null);

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const loginUser = async (event) => {
    event.preventDefault();
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
    const data = await res.json();

    setAuthTokens(data);
    setUser(jwt_decode(data.access));
    console.log(user);
  };
  const url = "http://127.0.0.1:8000/api/token/";
  // fetch data
  const { data, error } = useSWR(url);
  if (error) throw error;
  const contextData = {
    user: user,
    loginUser: loginUser,
  };

  // const loginUser = async (event) => {
  //   event.preventDefault();
  //     try {
  //       const url = "http://127.0.0.1:8000/api/token/";
  //       const res = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           username: event.target.username.value,
  //           password: event.target.password.value,
  //         }),
  //       });
  //       const data = await res.json();

  //       if (res.status === 200) {
  //         setAuthTokens(data);
  //         setUser(jwt_decode(data.access));
  //       } else {
  //         alert("Something Went wrong");
  //       }
  //       console.log("data:", user.username);
  //       console.log("response:", res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   axios
  //     .post(
  //       "http://127.0.0.1:8000/api/token/",
  //       {
  //         username: event.target.username.value,
  //         password: event.target.password.value,
  //       },
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json;charset=UTF-8",
  //         },
  //       }
  //     )
  //     .then(
  //       (response) => {
  //         setAuthTokens(response.data);
  //         setUser(jwt_decode(response.data.access));
  //         console.log(user);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // };

  // const contextData = {
  //   user: user,
  //   loginUser: loginUser,
  // };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
