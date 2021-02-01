import React from "react";
import { User, UserList } from "../../types";
import { SelectedPopsicleProps } from "./types";

function SelectedPopsicle(props: SelectedPopsicleProps) {
  return (
    <>
      <h1>{props.selectedUserId}</h1>
      <button
        onClick={() => {
          if (props.rememberSelected) {
            const userListCopy: UserList = JSON.parse(
              JSON.stringify(props.userList)
              // slow and expensive
              // can change the return obj, as it removes null/undefined values(?), or functions (which are not valid json)
            );
            props.setUserList(
              userListCopy.map(
                (user: User): User => {
                  if (user.id === props.selectedUserId) {
                    // user.selected = true;
                  }
                  return user;
                }
              )
            );
          }
          props.setSelectedUserId(null);
        }}
      >
        OK
      </button>
    </>
  );
}

export default SelectedPopsicle;
