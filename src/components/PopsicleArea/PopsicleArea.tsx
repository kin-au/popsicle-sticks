import React from "react";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

interface PopsicleAreaProps {
  userList: UserList;
  setUserList: any;
}

function PopsicleArea(props: PopsicleAreaProps) {
  return (
    <>
      <h2>popsicle area</h2>
      {props.userList
        ? props.userList.map((user) => {
            return <p key={user.username}>{user.username}</p>;
          })
        : null}
    </>
  );
}

export default PopsicleArea;
