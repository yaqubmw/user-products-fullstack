import axios from "axios";

import store, { persistor } from "../redux/store";
import { clearUser } from "../redux/slices/userSlice";
import { clearProducts } from "../redux/slices/productSlice";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(clearUser());
      store.dispatch(clearProducts());
      persistor.purge();
      window.location.href = "/login?session-end=true";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
