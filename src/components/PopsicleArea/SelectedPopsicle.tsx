import React from "react";
import { User } from "../../types";
import { SelectedPopsicleProps } from "./types";

const SelectedPopsicle = (props: SelectedPopsicleProps) => {
  const {
    userList,
    selectedUserId,
    setSelectedUserId,
    previouslySelectedUserId,
    setPreviouslySelectedUserId,
    rememberSelected,
  } = props;

  const user: User | any = userList.find((user) => user.id === selectedUserId);

  const addToPreviouslySelected = () => {
    if (rememberSelected) {
      if (typeof selectedUserId === "number") {
        setPreviouslySelectedUserId(
          previouslySelectedUserId.concat(selectedUserId)
        );
      }
    }
  };

  return (
    <>
      <h1>{user.username}</h1>
      <button
        onClick={() => {
          addToPreviouslySelected();
          setSelectedUserId(null);
        }}
      >
        OK
      </button>
    </>
  );
};

export default SelectedPopsicle;
