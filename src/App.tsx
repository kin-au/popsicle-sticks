import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import PopsiclePot from "./components/PopsicleArea/PopsiclePot";
import Controls from "./components/Controls";
import getUserData from "./utils/getUserData";
import getOrganisationData from "./utils/getOrganisationData";
import handleUserData from "./utils/handleUserData";
import handleOrganisationData from "./utils/handleOrganisationData";
import checkDuplicates from "./utils/checkDuplicates";
import { ResponseDataType, SearchDataType, UserList } from "./types";

const App = () => {
  const [userList, setUserList] = React.useState<UserList>([]);
  const [selectedUserId, setSelectedUserId] = React.useState<number | null>(
    null
  );
  const [
    previouslySelectedUserId,
    setPreviouslySelectedUserId,
  ] = React.useState<number[]>([]);
  const [rememberSelected, setRememberSelected] = React.useState<boolean>(true);

  const disableInput = selectedUserId != null;

  const searchUsers = async (
    searchType: SearchDataType,
    searchText: string
  ) => {
    let responseData: ResponseDataType;
    let handledData;
    if (searchType === "user") {
      responseData = await getUserData(searchText);
      handledData = handleUserData(responseData);
    } else if (searchType === "organisation") {
      responseData = await getOrganisationData(searchText);
      handledData = handleOrganisationData(responseData);
    }
    const checkedData = checkDuplicates(userList, handledData as UserList);
    setUserList([...userList, ...checkedData]);
  };

  return (
    <div className="flex flex-col h-screen p-2">
      <Header />
      <div className="flex flex-col md:flex-row mb-auto ">
        <Search disableInput={disableInput} searchUsers={searchUsers} />
        <PopsiclePot
          userList={userList}
          setUserList={setUserList}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          previouslySelectedUserId={previouslySelectedUserId}
          setPreviouslySelectedUserId={setPreviouslySelectedUserId}
          disableInput={disableInput}
          rememberSelected={rememberSelected}
        />
      </div>
      <Controls
        userList={userList}
        setUserList={setUserList}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        previouslySelectedUserId={previouslySelectedUserId}
        setPreviouslySelectedUserId={setPreviouslySelectedUserId}
        disableInput={disableInput}
        rememberSelected={rememberSelected}
        setRememberSelected={setRememberSelected}
      />
      <Footer />
    </div>
  );
};

export default App;
