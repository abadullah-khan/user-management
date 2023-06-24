import React, { useContext } from "react";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import { userContextApi } from "./Context API/UserContext";
import "./App.css";

const App = () => {
  const {
    state: { users },
  } = useContext(userContextApi);
  return (
    <div className="App">
      <UserForm />
      <div className="cardWrapper">
        {users.map((user, index) => (
          <UserCard key={user.id} {...user} index={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
