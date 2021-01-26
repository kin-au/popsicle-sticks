import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import PopsicleArea from "./components/PopsicleArea/PopsicleArea";
import Controls from "./components/Controls/Controls";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

function App() {
  // const [user, setUser] = React.useState<User | any>({});
  const [userList, setUserList] = React.useState<UserList | []>([]);
  const [disableElement, setDisableElement] = React.useState<boolean>(false);
  const [selectedUser, setSelectedUser] = React.useState<any>({} as any);

  return (
    <>
      <Header />
      <Search
        userList={userList}
        setUserList={setUserList}
        disableElement={disableElement}
        setDisableElement={setDisableElement}
      />
      <PopsicleArea
        // user={user}
        // setUser={setUser}
        userList={userList}
        setUserList={setUserList}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        disableElement={disableElement}
        setDisableElement={setDisableElement}
      />
      <Controls
        userList={userList}
        setUserList={setUserList}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        disableElement={disableElement}
        setDisableElement={setDisableElement}
      />
    </>
  );
}

export default App;
