import axios from "axios";
// http://localhost:8000/
export const axiosPublic = axios.create({
  baseURL: "http://localhost:8000",
});
export default function useAxiosPublic() {
  return axiosPublic;
}
