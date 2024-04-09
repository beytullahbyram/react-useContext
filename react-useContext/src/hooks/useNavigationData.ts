import { useContext } from "react";
import { ContextData } from "../contexts/UserContexct";

export const useNavigationData = () => useContext(ContextData);
