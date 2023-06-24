import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
const userContextApi = createContext();
const initialState = {
  username: "",
  address: "",
  email: "",
  phone: "",
  users: [],
  error: "",
  editing: false,
  clickedCard: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_HANDLER":
      const { name, value } = action.payload.target;
      return {
        ...state,
        [name]: value,
      };
    case "ADD_USER":
      action.payload.preventDefault();
      const { users, username, address, email, phone, editing, clickedCard } =
        state;
      if (username.trim() === "") {
        return {
          ...state,
          error: "Please enter valid username ",
        };
      } else if (address.trim() === "") {
        return {
          ...state,
          error: "Please enter valid address",
        };
      } else if (email.trim() === "" || !email.endsWith("@gmail.com")) {
        return {
          ...state,
          error: "Please enter valid email",
        };
      } else if (phone.length !== 10) {
        return {
          ...state,
          error: "Please enter valid phone no.",
        };
      } else if (editing) {
        users.map((user) => {
          if (user.id === clickedCard) {
            user.username = username;
            user.address = address;
            user.email = email;
            user.phone = phone;
          }
          return user;
        });
        return {
          ...state,
          username: "",
          address: "",
          email: "",
          phone: "",
          error: "",
          editing: false,
          clickedCard: null,
        };
      } else {
        return {
          ...state,
          users: [...users, { id: uuidv4(), username, address, email, phone }],
          username: "",
          address: "",
          email: "",
          phone: "",
          error: "",
        };
      }
    case "EDIT_USER":
      const isPresent = state.users.find((user) => user.id === action.payload);
      return {
        ...state,
        username: isPresent.username,
        address: isPresent.address,
        email: isPresent.email,
        phone: isPresent.phone,
        clickedCard: isPresent.id,
        editing: true,
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const container = {
    state,
    dispatch,
  };

  return (
    <userContextApi.Provider value={container}>
      {children}
    </userContextApi.Provider>
  );
};

export { UserContext, userContextApi };
