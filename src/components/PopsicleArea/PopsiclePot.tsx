import React from "react";
import SelectedPopsicle from "./SelectedPopsicle";
// import SelectedUser from "./SelectedUser";
import { User } from "../../types";
import { PopsiclePotProps } from "./types";
import PopsicleStick from "./PopsicleStick";

const PopsiclePot = (props: PopsiclePotProps) => {
  const {
    userList,
    setUserList,
    selectedUserId,
    setSelectedUserId,
    previouslySelectedUserId,
    setPreviouslySelectedUserId,
    disableInput,
    rememberSelected,
  } = props;

  const previouslySelectedUser = (user: User): boolean => {
    if (
      previouslySelectedUserId.find((id: number) => {
        return user.id === id;
      })
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <h2>Unselected Popsicles</h2>
      {!userList.length
        ? null
        : userList.map((user: User) => {
            if (!previouslySelectedUser(user)) {
              return (
                <PopsicleStick
                  user={user}
                  userList={userList}
                  setUserList={setUserList}
                  previouslySelectedUserId={previouslySelectedUserId}
                  setPreviouslySelectedUserId={setPreviouslySelectedUserId}
                  disableInput={disableInput}
                />
              );
            }
            return null;
          })}

      <h2>Selected Popsicles</h2>
      {!userList.length
        ? null
        : userList.map((user: User) => {
            if (previouslySelectedUser(user)) {
              return (
                <PopsicleStick
                  user={user}
                  userList={userList}
                  setUserList={setUserList}
                  previouslySelectedUserId={previouslySelectedUserId}
                  setPreviouslySelectedUserId={setPreviouslySelectedUserId}
                  disableInput={disableInput}
                />
              );
            }
            return null;
          })}

      {!selectedUserId ? null : (
        <SelectedPopsicle
          userList={userList}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          previouslySelectedUserId={previouslySelectedUserId}
          setPreviouslySelectedUserId={setPreviouslySelectedUserId}
          rememberSelected={rememberSelected}
        />
      )}
    </>
  );
};

export default PopsiclePot;
