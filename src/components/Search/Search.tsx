import React from "react";
import getData from "../../utils/getData";
import handleUserData from "../../utils/handleUserData";
import checkDuplicates from "../../utils/checkDuplicates";

interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

type DataType = "user" | "organisation" | any;

interface SearchProps {
  userList: UserList;
  setUserList: any;
  disableElement: boolean;
  setDisableElement: any;
}

function Search(props: SearchProps) {
  const [searchText, setSearchText] = React.useState("");
  const [searchType, setSearchType] = React.useState<DataType>("user");

  return (
    <>
      <form>
        <label htmlFor="searchtext">Search</label>
        <input
          disabled={props.disableElement}
          id="searchtext"
          type="search"
          placeholder="Find a GitHub user or organisation"
          value={searchText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setSearchText(event.target.value)
          }
          autoFocus
          required
        ></input>
        <label htmlFor="searchtype">Type</label>
        <select
          disabled={props.disableElement}
          id="searchtype"
          value={searchType}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
            setSearchType(event.target.value)
          }
        >
          <option value="user">User</option>
          <option value="organisation">Organisation</option>
        </select>
        <button
          disabled={props.disableElement}
          onClick={(event) => {
            event.preventDefault();
            getData(searchType, searchText)
              .then((rawData) => handleUserData(rawData, searchType))
              .then((data) => checkDuplicates(props.userList, data))
              .then((data) => props.setUserList([...props.userList, ...data]));
            setSearchText("");
          }}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Search;
