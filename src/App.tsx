import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import PopsiclePot from "./components/PopsicleArea/PopsiclePot";
import Controls from "./components/Controls";
import getData from "./utils/getData";
import handleUserData from "./utils/handleUserData";
import checkDuplicates from "./utils/checkDuplicates";
import { SearchDataType, UserList } from "./types";

const App = () => {
  const [userList, setUserList] = React.useState<UserList>([]);
  const [selectedUserId, setSelectedUserId] = React.useState<number | null>(
    null
  );
  // const [previouslyselectedUserId, setpreviouslySelectedUserId] = React.useState<number[]>([]);
  const [rememberSelected, setRememberSelected] = React.useState<boolean>(true);

  const disableInput = selectedUserId != null;

  const searchUsers = async (
    searchType: SearchDataType,
    searchText: string
  ) => {
    const responseData = await getData(searchType, searchText);
    const handledData = handleUserData(responseData, searchType);
    const checkedData = checkDuplicates(userList, handledData);
    setUserList([...userList, ...checkedData]);
  };

  return (
    <>
      <Header />
      <Search disableInput={disableInput} searchUsers={searchUsers} />
      <PopsiclePot
        userList={userList}
        setUserList={setUserList}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        disableInput={disableInput}
        rememberSelected={rememberSelected}
        setRememberSelected={setRememberSelected}
      />
      <Controls
        userList={userList}
        setUserList={setUserList}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        disableInput={disableInput}
        rememberSelected={rememberSelected}
        setRememberSelected={setRememberSelected}
      />
    </>
  );
};

export default App;
