import React from "react";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

interface SelectedPopsicleProps {
  userList: UserList;
  setUserList: any;
  selectedUser: any;
  setSelectedUser: any;
  showingSelected: boolean;
  setShowingSelected: any;
}

function SelectedPopsicle(props: SelectedPopsicleProps) {
  return (
    <>
      <div>
        <h1>{props.selectedUser.username}</h1>
        <button
          onClick={() => {
            const userListCopy: UserList = JSON.parse(
              JSON.stringify(props.userList)
            );
            props.setUserList(
              userListCopy.map(
                (user: User): User => {
                  if (user.id === props.selectedUser.id) {
                    user.selected = true;
                  }
                  return user;
                }
              )
            );
            props.setSelectedUser({});
            props.setShowingSelected(false);
          }}
        >
          OK
        </button>
      </div>
    </>
  );
}

export default SelectedPopsicle;
