import React, { useContext } from "react";
import { userContextApi } from "../Context API/UserContext";

import style from "../styles/userForm.module.css";

const UserForm = () => {
  const {
    dispatch,
    state: { username, address, email, phone, error, editing },
  } = useContext(userContextApi);

  return (
    <form
      className={style.form}
      onSubmit={(e) => dispatch({ type: "ADD_USER", payload: e })}
    >
      <h2>Add user details</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="Enter username"
          onChange={(e) => dispatch({ type: "CHANGE_HANDLER", payload: e })}
          required
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          placeholder="Enter address"
          onChange={(e) => dispatch({ type: "CHANGE_HANDLER", payload: e })}
          required
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => dispatch({ type: "CHANGE_HANDLER", payload: e })}
          required
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone no.</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          placeholder="Enter phone"
          onChange={(e) => dispatch({ type: "CHANGE_HANDLER", payload: e })}
          required
          autoComplete="off"
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit" title={editing ? "Save user" : "Add user"}>
        {editing ? "Save" : "Add"}
      </button>
    </form>
  );
};

export default UserForm;
