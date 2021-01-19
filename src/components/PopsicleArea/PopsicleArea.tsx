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
  // user: User;
  // setUser: any;
  userList: UserList;
  setUserList: any;
}

function PopsicleArea(props: PopsicleAreaProps) {
  return (
    <>
      <h2>popsicle area</h2>
      {props.userList
        ? props.userList.map((user: User) => {
            return (
              <div key={user.id}>
                <p>{user.username}</p>;
                <button
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
    </>
  );
}

export default PopsicleArea;
