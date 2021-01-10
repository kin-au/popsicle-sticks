import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  const [userData, setUserData] = React.useState(null);
  // const [usersList, setUsersList] = React.useState(null)

  return (
    <>
      <Header title="Popsicle sticks" />
      <Search
        // userData={userData}
        setUserData={setUserData}
      />
    </>
  );
}

export default App;
