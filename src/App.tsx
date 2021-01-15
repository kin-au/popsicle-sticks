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

// need to add a check for duplicates (using id)
// if duplicate, do not add to userList, and show message/alert to user

function App() {
  // const [user, setUser] = React.useState<User | {}>({});
  const [userList, setUserList] = React.useState<UserList | []>([]);

  return (
    <>
      <Header title="Popsicle sticks" />
      <Search userList={userList} setUserList={setUserList} />
      <PopsicleArea userList={userList} setUserList={setUserList} />
    </>
  );
}

export default App;
