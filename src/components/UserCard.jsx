import React, { useContext } from "react";
import { userContextApi } from "../Context API/UserContext";

import styles from "../styles/card.module.css";

const UserCard = ({ username, email, phone, id, index }) => {
  const { dispatch } = useContext(userContextApi);
  return (
    <div className={styles.card}>
      <span>{index + 1}.</span>
      <div>
        <p>
          Username : <span>{username}</span>
        </p>

        <p>
          Email : <span>{email}</span>
        </p>
        <p>
          Phone : <span>{phone}</span>
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => dispatch({ type: "EDIT_USER", payload: id })}
          title="Edit user"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: "REMOVE_USER", payload: id })}
          title="Delete user"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
