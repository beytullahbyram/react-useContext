import { createContext } from "react";
import { IUser } from "../App";

interface IContext {
    changeColor?: (id: number, color: string) => void;
    users: IUser[]
}

export const UserContext = createContext<IContext>({
    users: []
});
