import React from "react";
import { User } from "../../types";
import Button from "../Elements/Button";
import { PopsicleStickProps } from "./types";

const PopsicleStick = (props: PopsicleStickProps) => {
  const {
    user,
    userList,
    setUserList,
    previouslySelectedUserId,
    setPreviouslySelectedUserId,
    disableInput,
  } = props;

  const removeFromUserList = () => {
    let newArr = [...userList];
    const removeIndex = newArr.indexOf(
      newArr.find((newUser) => newUser.id === user.id) as User
    );
    if (removeIndex !== -1) {
      newArr.splice(removeIndex, 1);
      setUserList(newArr);
    }
  };

  const removeFromPreviouslySelected = () => {
    let newArr = [...previouslySelectedUserId];
    const removeIndex = newArr.indexOf(
      newArr.find((newId) => newId === user.id) as number
    );
    if (removeIndex !== -1) {
      newArr.splice(removeIndex, 1);
      setPreviouslySelectedUserId(newArr);
    }
  };

  return (
    <div key={user.id} className="flex justify-between">
      <p>{user.username}</p>
      <Button
        type="button"
        disabled={disableInput}
        onClick={() => {
          removeFromUserList();
          removeFromPreviouslySelected();
        }}
        text="&times;"
      />
    </div>
  );
};

export default PopsicleStick;
