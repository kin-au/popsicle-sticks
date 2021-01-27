import React from "react";
import pickRandomPopsicle from "../../utils/pickRandomPopsicle";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

interface ControlsProps {
  userList: UserList;
  setUserList: any;
  selectedUser: any;
  setSelectedUser: any;
  showingSelected: boolean;
  setShowingSelected: any;
}

function Controls(props: ControlsProps) {
  return (
    <>
      <button
        disabled={props.showingSelected || !props.userList.length}
        onClick={() => {
          props.setSelectedUser(pickRandomPopsicle(props.userList));
          props.setShowingSelected(true);
        }}
      >
        Random popsicle
      </button>
      <button
        disabled={props.showingSelected || !props.userList.length}
        onClick={() => {
          props.setSelectedUser({});
          props.setUserList([]);
          props.setShowingSelected(false);
        }}
      >
        Remove all popsicles
      </button>
    </>
  );
}

export default Controls;
