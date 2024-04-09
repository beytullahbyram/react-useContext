import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContexct";

interface UserProps {
    id: number;
    name: string;
    email: string;
    age: number;
    color: string;
}

interface UserComponentProps {
    user: UserProps;
    changeColor: (id: number, color: string) => void;
}

const User: React.FC<UserComponentProps> = ({ user }) => {
    const { changeColor } = useContext(UserContext);

    return (
        <div style={{ background: user.color }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            Color:{" "}
            <input
                value={user.color}
                onChange={(e) => changeColor!(user.id, e.target.value)}
            />
        </div>
    );
};

export default User;
