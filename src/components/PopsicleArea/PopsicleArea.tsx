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
  rememberSelected: boolean;
  setRememberSelected: any;
}

function PopsicleArea(props: PopsicleAreaProps) {
  return (
    <>
      <h2>Popsicle Pot</h2>
      {props.userList.length
        ? props.userList.map((user: User) => {
            return user.selected === false ? (
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
            ) : null;
          })
        : null}
      <h2>Selected Popsicles</h2>
      {props.userList.length
        ? props.userList.map((user: User) => {
            return user.selected === true ? (
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
            ) : null;
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
          rememberSelected={props.rememberSelected}
          setRememberSelected={props.setRememberSelected}
        />
      )}
    </>
  );
}

export default PopsicleArea;
