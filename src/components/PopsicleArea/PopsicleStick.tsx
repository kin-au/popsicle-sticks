import React from "react";
import { PopsicleStickProps } from "./types";

const PopsicleStick = (props: PopsicleStickProps) => {
  const { user, userList, setUserList, disableInput } = props;

  return (
    <div key={user.id}>
      <p>{user.username}</p>
      <button
        disabled={disableInput}
        onClick={() => {
          let newArr = [...userList];
          const removeIndex = newArr.indexOf(
            newArr.find((newUser) => newUser.id === user.id)!
          );
          newArr.splice(removeIndex, 1);
          setUserList(newArr);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default PopsicleStick;
