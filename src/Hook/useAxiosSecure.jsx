import axios from "axios";

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSequre = axios.create({
  baseURL: "http://localhost:8000",
});

export default function useAxiosSecure() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  axiosSequre.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("Access-token"); // get token in local storage
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSequre.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      // console.log("status error in the interceptors", error);
      if ( error?.response?.status === 401 ||  error?.response?.status === 403) {
        await signout();
        // console.log("Logout you unaccess token")
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSequre;
}
