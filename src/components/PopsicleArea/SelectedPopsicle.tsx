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
    <div className="flex flex-col justify-center items-center fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-20">
      <div className="flex flex-col justify-center items-center w-11/12 h-2/6 bg-custom-background border rounded-lg py-10">
        <div className="flex justify-center relative items-center mb-6 py-4 w-11/12 bg-custom-popsicle rounded-full">
          <img
            src={user.avatar}
            alt="avatar"
            className="absolute left-2 h-16 rounded-full"
          />
          <p className="text-center text-5xl font-serif text-custom-popsicle-text font-medium">
            {user.username}
          </p>
        </div>
        <div className="self-center w-1/4 text-center">
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
    </div>
  );
};

export default SelectedPopsicle;
