import React from "react";
import { User } from "../../types";
import Button from "../Elements/Button";
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
    <div className="flex flex-col justify-center fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-20">
      <div className="flex flex-col justify-center self-center w-11/12 h-2/6 bg-white border rounded-md py-8">
        <p className="text-7xl font-bold self-center pb-4">{user.username}</p>
        <Button
          type="button"
          onClick={() => {
            addToPreviouslySelected();
            setSelectedUserId(null);
          }}
          text="OK"
        />
      </div>
    </div>
  );
};

export default SelectedPopsicle;
