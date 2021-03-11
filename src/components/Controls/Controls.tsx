import React from "react";
import pickRandomPopsicleId from "../../utils/pickRandomPopsicleId";
import Button from "../Elements/Button";
import { ControlsProps } from "./types";

const Controls = (props: ControlsProps) => {
  const {
    userList,
    setUserList,
    setSelectedUserId,
    previouslySelectedUserId,
    setPreviouslySelectedUserId,
    disableInput,
    rememberSelected,
    setRememberSelected,
  } = props;

  const unselectedUserListId: number[] = userList
    .filter((user) => {
      const match = previouslySelectedUserId.find((id) => id === user.id);
      return match ? null : user;
    })
    .map((user) => {
      return user.id;
    });

  const noUnselectedPopsicles: boolean =
    !userList.length || userList.length === previouslySelectedUserId.length;

  const selectedPopsicles: boolean =
    !userList.length || !previouslySelectedUserId.length;

  return (
    <div className="flex flex-wrap">
      <label
        htmlFor="rememberSelected"
        className={`flex items-center group m-2 p-2 text-gray-50 font-semibold rounded transition-all duration-100 ${
          disableInput || noUnselectedPopsicles
            ? "bg-gray-200 opacity-100 cursor-not-allowed"
            : "bg-blue-900 hover:opacity-75 cursor-pointer"
        }`}
      >
        Remember Selected
        <input
          disabled={disableInput || noUnselectedPopsicles}
          id="rememberSelected"
          type="checkbox"
          checked={rememberSelected}
          className="ml-2 w-6 h-6 rounded-full 
          bg-blue-900 text-blue-900 border-white border-2 
          checked:border-white checked:border-2 
          group-hover:border-white group-hover:border-2 hover:cursor-pointer 
          disabled:bg-gray-200 disabled:text-gray-200 disabled:cursor-not-allowed disabled:opacity-100 
          focus:ring-transparent focus:outline-none"
          onChange={() => setRememberSelected(!rememberSelected)}
        />
      </label>
      <Button
        type="button"
        disabled={disableInput || noUnselectedPopsicles}
        onClick={() => {
          setSelectedUserId(pickRandomPopsicleId(unselectedUserListId));
        }}
        text="Random popsicle"
      />
      <Button
        type="button"
        disabled={disableInput || selectedPopsicles}
        onClick={() => {
          setPreviouslySelectedUserId([]);
        }}
        text="Reset popsicles"
      />
      <Button
        type="button"
        disabled={disableInput || !userList.length}
        onClick={() => {
          setPreviouslySelectedUserId([]);
          setUserList([]);
        }}
        text="Remove all popsicles"
      />
    </div>
  );
};

export default Controls;
