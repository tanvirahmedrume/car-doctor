import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, 
});

// 🔥 optional: unauthorized handle
axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 ||
      error.response?.status === 403
    ) {
      console.log("Unauthorized! Redirecting...");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;