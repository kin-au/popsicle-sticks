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
  const [showingSelected, setShowingSelected] = React.useState<boolean>(false);
  const [selectedUser, setSelectedUser] = React.useState<any>({} as any);
  const [rememberSelected, setRememberSelected] = React.useState<boolean>(true);

  return (
    <>
      <Header />
      <Search
        userList={userList}
        setUserList={setUserList}
        showingSelected={showingSelected}
        setShowingSelected={setShowingSelected}
      />
      <PopsicleArea
        // user={user}
        // setUser={setUser}
        userList={userList}
        setUserList={setUserList}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        showingSelected={showingSelected}
        setShowingSelected={setShowingSelected}
        rememberSelected={rememberSelected}
        setRememberSelected={setRememberSelected}
      />
      <Controls
        userList={userList}
        setUserList={setUserList}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        showingSelected={showingSelected}
        setShowingSelected={setShowingSelected}
        rememberSelected={rememberSelected}
        setRememberSelected={setRememberSelected}
      />
    </>
  );
}

export default App;
