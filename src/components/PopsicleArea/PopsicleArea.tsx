import React from "react";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserData extends Array<User> {}

interface PopsicleAreaProps {
  userData: UserData;
  setUserData: any;
}

function PopsicleArea(props: PopsicleAreaProps) {
  return (
    <>
      <h2>popsicle area</h2>
      {props.userData
        ? props.userData.map((user) => {
            return <p key={user.username}>{user.username}</p>;
          })
        : null}
    </>
  );
}

export default PopsicleArea;
