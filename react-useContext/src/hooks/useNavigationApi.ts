import { useContext } from "react";
import { ContextApi } from "../contexts/UserContexct";

export const useNavigationApi = () => useContext(ContextApi);