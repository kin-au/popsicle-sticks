import React from "react";
import PopsicleStick from "../PopsicleStick/PopsicleStick";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

interface PopsicleAreaProps {
  user: User;
  setUser: any;
  userList: UserList;
  setUserList: any;
}

function PopsicleArea(props: PopsicleAreaProps) {
  return (
    <>
      <h2>popsicle area</h2>
      {props.userList
        ? props.userList.map((person) => {
            props.setUser(person);
            return <PopsicleStick user={props.user} />;
            // return <p key={user.username}>{user.username}</p>;
          })
        : null}
    </>
  );
}

export default PopsicleArea;
