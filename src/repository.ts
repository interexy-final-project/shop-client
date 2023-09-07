import axios from "axios";

// const { REACT_APP_API_URL } = process.env.PUBLIC_URL;

const repository = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
});

repository.interceptors.request.use((config) => {
  // const access_token = cookies.get('access_token');

  // if (access_token) {
  //   config.headers = {
  //     Authorization: `Bearer ${access_token}`,
  //   };
  // }
  return config;
});

export default repository;
