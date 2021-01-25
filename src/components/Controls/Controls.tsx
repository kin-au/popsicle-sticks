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
  disableElement: boolean;
  setDisableElement: any;
}

function Controls(props: ControlsProps) {
  return (
    <>
      {props.userList.length ? (
        <button
          disabled={props.disableElement}
          onClick={() => {
            props.setSelectedUser(pickRandomPopsicle(props.userList));
            props.setDisableElement(true);
          }}
        >
          Random popsicle
        </button>
      ) : null}
      {props.userList.length ? (
        <button
          disabled={props.disableElement}
          onClick={() => {
            props.setSelectedUser({});
            props.setUserList([]);
            props.setDisableElement(false);
          }}
        >
          Remove all popsicles
        </button>
      ) : null}
    </>
  );
}

export default Controls;
