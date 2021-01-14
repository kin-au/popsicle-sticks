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

interface UserData extends Array<User> {}

// need to add a check for duplicates (using id)
// if duplicate, do not add to userData, and show message/alert to user

function App() {
  const [userData, setUserData] = React.useState<UserData | []>([]);

  return (
    <>
      <Header title="Popsicle sticks" />
      <Search userData={userData} setUserData={setUserData} />
      <PopsicleArea userData={userData} setUserData={setUserData} />
    </>
  );
}

export default App;
