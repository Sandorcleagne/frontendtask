import { hostName } from "@/utils/static";
import axios from "axios";
export const signUp = async (values) => {
  const options = {
    method: "POST",
    url: `${hostName}websiteregister`,
    headers: { "Content-Type": "application/json" },
    data: { name: values.name, email: values.email, password: values.password },
  };

  const data = await axios.request(options);
  return data.data;
};

export const signIn = async (values) => {
  const options = {
    method: "POST",
    url: `${hostName}websitelogin`,
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "insomnia/2023.5.8",
    },
    data: { email: values.email, password: values.password },
  };

  const data = await axios.request(options);
  return data.data;
};

export const tokenCheck = async (token) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "User-Agent": "insomnia/2023.5.8",
      Authorization: `authorization ${token}`,
    },
  };

  const data = await axios.request(options);
  return data.data;
};
