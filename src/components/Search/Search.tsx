import React from "react";
import getUser from "../../utils/getUser";
import getOrg from "../../utils/getOrg";
import handleUserData from "../../utils/handleUserData";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserData extends Array<User> {}

interface SearchProps {
  userData: UserData;
  setUserData: any;
}

function Search(props: SearchProps) {
  const [searchText, setSearchText] = React.useState("");
  const [searchType, setSearchType] = React.useState("user");

  return (
    <>
      <form>
        <label htmlFor="searchtext">Search</label>
        <input
          id="searchtext"
          type="search"
          placeholder="Find a GitHub user or organisation"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          autoFocus
          required
        ></input>
        <label htmlFor="searchtype">Type</label>
        <select
          id="searchtype"
          value={searchType}
          onChange={(event) => setSearchType(event.target.value)}
        >
          <option value="user">User</option>
          <option value="organisation">Organisation</option>
        </select>
        <button
          onClick={(event) => {
            event.preventDefault();
            if (searchType === "user") {
              getUser(searchText)
                .then((rawData) => handleUserData(rawData, "user"))
                .then((data) =>
                  props.setUserData([...props.userData, ...data])
                );
            } else if (searchType === "organisation") {
              getOrg(searchText)
                .then((rawData) => handleUserData(rawData, "org"))
                .then((data) =>
                  props.setUserData([...props.userData, ...data])
                );
            }
          }}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Search;
