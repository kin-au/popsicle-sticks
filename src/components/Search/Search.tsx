import React from "react";
import getUser from "../../utils/getUser";
import getOrg from "../../utils/getOrg";

interface SearchProps {
  // userData: any;
  setUserData: any;
}

function Search(props: SearchProps) {
  const [searchText, setSearchText] = React.useState("");
  const searchValue = (event: any) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <label htmlFor="searchtext">Search</label>
      <input
        id="searchtext"
        type="search"
        placeholder="Find a GitHub user or organisation"
        value={searchText}
        onChange={(event) => searchValue(event)}
        autoFocus
        required
      ></input>
      <label htmlFor="searchtype">Type</label>
      <select id="searchtype">
        <option value="user">User</option>
        <option value="organisation">Organisation</option>
      </select>
      <button
        onClick={(event) => {
          event.preventDefault();
          getUser(searchText).then((data) => console.log(data));
        }}
      >
        Add
      </button>
    </>
  );
}

export default Search;
