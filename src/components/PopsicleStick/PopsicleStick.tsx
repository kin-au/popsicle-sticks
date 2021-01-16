import React from "react";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

// interface UserList extends Array<User> {}

interface PopsicleStickProps {
  user: User;
  // setUser: any;
  // userList: UserList;
  // setUserList: any;
}

function PopsicleStick(props: PopsicleStickProps) {
  return (
    <>
      <p>{props.user.username}</p>
      <img src={props.user.avatar} alt="avatar" />
      <button>Remove</button>
    </>
  );
}

export default PopsicleStick;
