import React from "react";
import SelectedPopsicle from "./SelectedPopsicle";
// import SelectedUser from "./SelectedUser";
import { User } from "../../types";
import { PopsiclePotProps } from "./types";

const PopsiclePot = (props: PopsiclePotProps) => {
  // display selected users / not-selected users, pass list to each component

  return (
    <>
      <h2>Popsicle Pot</h2>
      {/* {props.userList.length === 0 ? null : <SelectedUser>} */}

      <h2>Selected Popsicles</h2>
      {props.userList.length
        ? props.userList.map((user: User) => {
            return (
              // change this to check if user is in selectedArray
              <div key={user.id}>
                <p>{user.username}</p>
                <button
                  disabled={props.disableInput}
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

      {props.selectedUserId ? null : (
        <SelectedPopsicle
          userList={props.userList}
          setUserList={props.setUserList}
          selectedUserId={props.selectedUserId}
          setSelectedUserId={props.setSelectedUserId}
          disableInput={props.disableInput}
          rememberSelected={props.rememberSelected}
          setRememberSelected={props.setRememberSelected}
        />
      )}
    </>
  );
};

export default PopsiclePot;
