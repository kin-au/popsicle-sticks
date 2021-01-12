import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

interface User {
  avatar_url: string;
  html_url: string;
  login: string;
  selected: boolean;
}

interface UserData extends Array<User> {}

// user object - same as organisation (users in array)
// avatar_url: "https://avatars3.githubusercontent.com/u/67898321?v=4"
// html_url: "https://github.com/kin-au"
// login: "kin-au"
// construct an object for each user fetched, push users to userData array

function App() {
  const [userData, setUserData] = React.useState<UserData | []>([]);
  // const [usersList, setUsersList] = React.useState(null)

  return (
    <>
      <Header title="Popsicle sticks" />
      <Search userData={userData} setUserData={setUserData} />
    </>
  );
}

export default App;
