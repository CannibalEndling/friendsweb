import React, { useState }   from "react";
import "./SingleUsers.css";
import PeopleIcon from "@mui/icons-material/People";

const SingleUsers = ({ id, email, first_name, last_name, avatar }) => {
  const [removeUser, setRemoveUser] = useState(true);
  const [pendingUser, setPendingUser] = useState(true);

  const randomFriend = () => {
    setTimeout(() => {
      const rand = Boolean(Math.round(Math.random()));
      setRemoveUser(rand);
    }, 3000);
  };

  return (
    <div className="individualuser" key={id}>
      <div>
        <p className="MainText">{first_name + " " + last_name}</p>
        <p className="SecondaryText">{email}</p>
      </div>
      <div>
        {removeUser === false ? (
          <div className="icon">
            <p>Friends </p>
            <PeopleIcon />
          </div>
        ) : (
          <></>
        )}
      </div>
      <img
        className="UserPhoto"
        style={{ width: 300, height: 300 }}
        src={avatar}
        alt={avatar}
      />

      <button
        onClick={() => {
          setPendingUser(!pendingUser);
          randomFriend();

        }}
        hidden={pendingUser ? false : true}
        className="FriendButton"
      >
        Add Friend
      </button>
      {removeUser === false ? (
        <button
          hidden={removeUser}
          className="RemoveButton"
          onClick={() => {
            if(removeUser === false) {
             setRemoveUser(true)
             setPendingUser(true)
            }
          }}
        >
          Remove Friend
        </button>
      ) : (
        <button hidden={pendingUser} className="PendingButton">
          Pending
        </button>
      )}
    </div>
  );
};

export default SingleUsers;
