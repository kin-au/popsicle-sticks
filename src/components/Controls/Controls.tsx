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
    <>
      <div>
        <label htmlFor="rememberSelected">Remember Selected</label>
        <input
          disabled={disableInput || noUnselectedPopsicles}
          id="rememberSelected"
          type="checkbox"
          checked={rememberSelected}
          onChange={() => setRememberSelected(!rememberSelected)}
        />
      </div>
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
        disabled={disableInput || noUnselectedPopsicles}
        onClick={() => {
          setPreviouslySelectedUserId([]);
          setUserList([]);
        }}
        text="Remove all popsicles"
      />
    </>
  );
};

export default Controls;
