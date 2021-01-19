import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import PopsicleArea from "./components/PopsicleArea/PopsicleArea";

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

  return (
    <>
      <Header title="Popsicle sticks" />
      <Search userList={userList} setUserList={setUserList} />
      <PopsicleArea
        // user={user}
        // setUser={setUser}
        userList={userList}
        setUserList={setUserList}
      />
    </>
  );
}

export default App;
