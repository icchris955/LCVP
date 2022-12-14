import axios from "axios";

export default async (req, res) => {
  let accessToken = null;

  if (req.method === "POST") {
    const { name, nid, phone, email, password } = req.body;

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = {
      nid,
      name,
      email,
      phone,
      password,
    };

    try {
      await axios.post(
        "http://localhost:8000/api/v1/lcvp/register/",
        { nid, name, email, phone, password },
        config
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
    res.status(200).json({ message: "User has been created!" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
