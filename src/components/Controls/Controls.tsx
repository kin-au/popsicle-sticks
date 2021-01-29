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
  rememberSelected: boolean;
  setRememberSelected: any;
}

function Controls(props: ControlsProps) {
  return (
    <>
      <div>
        <label htmlFor="rememberSelected">Remember Selected</label>
        <input
          disabled={props.showingSelected || !props.userList.length}
          id="rememberSelected"
          type="checkbox"
          checked={props.rememberSelected}
          onChange={() => props.setRememberSelected(!props.rememberSelected)}
        />
      </div>
      <button
        disabled={props.showingSelected || !props.userList.length}
        onClick={() => {
          const unselectedUserList = props.userList.filter((user: User) => {
            return user.selected === false;
          });
          props.setSelectedUser(pickRandomPopsicle(unselectedUserList));
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
