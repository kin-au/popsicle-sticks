import React from "react";
import pickRandomPopsicle from "../../utils/pickRandomPopsicle";

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
  disableElement: boolean;
  setDisableElement: any;
}

function PopsicleArea(props: PopsicleAreaProps) {
  const [selectedUser, setSelectedUser] = React.useState<any>({} as any);

  return (
    <>
      <h2>popsicle pot</h2>
      {props.userList.length
        ? props.userList.map((user: User) => {
            return (
              <div key={user.id}>
                <p>{user.username}</p>;
                <button
                  disabled={props.disableElement}
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
      {Object.keys(selectedUser).length === 0 &&
      selectedUser.constructor === Object ? null : (
        <div>
          <h1>{selectedUser.username}</h1>
          <button
            onClick={() => {
              setSelectedUser({});
              props.setDisableElement(false);
            }}
          >
            OK
          </button>
        </div>
      )}
      {props.userList.length ? (
        <button
          disabled={props.disableElement}
          onClick={() => {
            setSelectedUser(pickRandomPopsicle(props.userList));
            props.setDisableElement(true);
          }}
        >
          Random popsicle
        </button>
      ) : null}
      {props.userList.length ? (
        <button
          disabled={props.disableElement}
          onClick={() => {
            setSelectedUser({});
            props.setUserList([]);
            props.setDisableElement(false);
          }}
        >
          Remove all popsicles
        </button>
      ) : null}
    </>
  );
}

export default PopsicleArea;
