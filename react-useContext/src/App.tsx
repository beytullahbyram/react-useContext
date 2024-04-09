import React, { useState } from "react";
import UserList from "./UserList";
import './App.css'
import { UserContext } from './contexts/UserContexct'

export interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  color: string;
}

const data: IUser[] = [
  { id: 1, name: "Ahmet", email: "ahmet@site.com", age: 25, color: "lightcyan" },
  { id: 2, name: "Mehmet", email: "mehmet@site.com", age: 30, color: "honeydew" },
  { id: 3, name: "Ali", email: "ali@site.com", age: 35, color: "mistyrose" }
];

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>(data);

  const changeColors = (id: number, color: string) => {
    setUsers(
      users.map(user => (user.id === id ? { ...user, color: color } : user))
    );
  }
  return (
    <UserContext.Provider value={{
      changeColor: changeColors,
      users: users
    }}>
      <div className="App">
        <header>
          <h1>Welcome!</h1>
        </header>
        <UserList />
      </div>
    </UserContext.Provider>
  );
};

export default App;
