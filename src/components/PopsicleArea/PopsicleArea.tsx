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
  showingSelected: boolean;
  setShowingSelected: any;
}

function PopsicleArea(props: PopsicleAreaProps) {
  return (
    <>
      <h2>popsicle pot</h2>
      {props.userList.length
        ? props.userList.map((user: User) => {
            return (
              <div key={user.id}>
                <p>{user.username}</p>
                <button
                  disabled={props.showingSelected}
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
          userList={props.userList}
          setUserList={props.setUserList}
          selectedUser={props.selectedUser}
          setSelectedUser={props.setSelectedUser}
          showingSelected={props.showingSelected}
          setShowingSelected={props.setShowingSelected}
        />
      )}
    </>
  );
}

export default PopsicleArea;
