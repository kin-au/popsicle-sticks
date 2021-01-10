import React from "react";
import getUser from "../../utils/getUser";
import getOrg from "../../utils/getOrg";

interface SearchProps {
  // userData: any;
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
              getUser(searchText).then((data) => console.log(data));
            } else if (searchType === "organisation") {
              getOrg(searchText).then((data) => console.log(data));
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
