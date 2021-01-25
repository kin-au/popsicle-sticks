import React from "react";
import SelectedPopsicle from "../SelectedPopsicle/SelectedPopsicle";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

interface PopsicleAreaProps {
  // user: User;
  // setUser: any;
  userList: UserList;
  setUserList: any;
  selectedUser: any;
  setSelectedUser: any;
  disableElement: boolean;
  setDisableElement: any;
}

function PopsicleArea(props: PopsicleAreaProps) {
  return (
    <>
      <h2>popsicle pot</h2>
      {props.userList.length
        ? props.userList.map((user: User) => {
            return (
              <div key={user.id}>
                <p>{user.username}</p>;
                <button
                  disabled={props.disableElement}
                  onClick={() => {
                    let newArr = [...props.userList];
                    const removeIndex = newArr.indexOf(
                      newArr.find((newUser) => newUser.id === user.id)!
                    );
                    newArr.splice(removeIndex, 1);
                    props.setUserList(newArr);
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })
        : null}
      {Object.keys(props.selectedUser).length === 0 &&
      props.selectedUser.constructor === Object ? null : (
        <SelectedPopsicle
          selectedUser={props.selectedUser}
          setSelectedUser={props.setSelectedUser}
          disableElement={props.disableElement}
          setDisableElement={props.setDisableElement}
        />
      )}
    </>
  );
}

export default PopsicleArea;
