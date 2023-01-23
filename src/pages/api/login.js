import axios from "axios";
import cookie from "cookie";

export default async (req, res) => {
  let accessToken = null;

  if (req.method === "POST") {
    const { email, password } = req.body;

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
        "http://localhost:8000/api/v1/lcvp/login/",
        { email, password },
        config
      );

      accessToken = accessResponse.access;
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("refresh", accessResponse.refresh, {
          httpOnly: true,
          secure: false, // Change to true in production
          sameSite: "strict",
          maxAge: 60 * 60 * 24,
          path: "/",
        })
      );
    } catch (error) {
      if (error.response) {
        // request was made and server responded with a status code
        // that falls out of the range 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
        return res.status(401).json({ message: error.response.data.detail });
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error("Error", error.message);
      }
      console.error(error.config);
      return res.status(500).json({ message: "Something went wrong!" });
    }

    const { data: accessResponse } = await axios.post(
      "http://localhost:8000/api/v1/lcvp/login/",
      { email, password },
      config
    );

    accessToken = accessResponse.access;

    if (accessToken) {
      const userConfig = {
        headers: {
          Authorization: `Bearer ` + accessToken,
        },
      };

      const { data: userData } = await axios.get(
        "http://localhost:8000/api/v1/lcvp/auth/",
        userConfig
      );

      console.log(userData);

      res.status(200).json({ user: userData, access: accessToken });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
