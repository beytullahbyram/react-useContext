import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./contexts/UserContexct";


const UserList: React.FC = () => {
    const { changeColor, users } = useContext(UserContext);

    return (
        <>
            <h2>User List</h2>
            {users.map((user) => (
                <User key={user.name} user={user} changeColor={changeColor!} />
            ))}
        </>
    );
};

export default UserList;
