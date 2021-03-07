import React from "react";
import { User } from "../../types";
import CloseButton from "../Elements/CloseButton";
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
    <div
      key={user.id}
      className="flex justify-between items-center m-1 p-1 rounded-full bg-yellow-800"
    >
      <img src={user.avatar} alt="avatar" className="h-8 rounded-full" />
      <p className="mx-auto font-serif text-gray-50 font-medium text-lg truncate">
        {user.username}
      </p>
      <CloseButton
        disabled={disableInput}
        onClick={() => {
          removeFromUserList();
          removeFromPreviouslySelected();
        }}
      />
    </div>
  );
};

export default PopsicleStick;
