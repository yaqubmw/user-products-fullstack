import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const token = useSelector((state: RootState) => state.user.token);
  return Boolean(token);
};
