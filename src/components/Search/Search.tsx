import React from "react";
import { SearchProps } from "./types";
import { SearchDataType } from "../../types";

const Search = (props: SearchProps) => {
  const { disableInput, searchUsers } = props;
  const [searchText, setSearchText] = React.useState("");
  const [searchType, setSearchType] = React.useState<SearchDataType>("user");
  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    await searchUsers(searchType, searchText);
    setSearchText("");
  };
  return (
    <form>
      <label htmlFor="searchtext">Search</label>
      <input
        disabled={disableInput}
        id="searchtext"
        type="search"
        placeholder="Find a GitHub user or organisation"
        value={searchText}
        autoFocus
        required
        onChange={(event) => setSearchText(event.target.value)}
      ></input>
      <label htmlFor="searchtype">Type</label>
      <select
        disabled={disableInput}
        id="searchtype"
        value={searchType}
        required
        onChange={(event) =>
          setSearchType(event.target.value as SearchDataType)
        }
      >
        <option value="user">User</option>
        <option value="organisation">Organisation</option>
      </select>
      <button disabled={disableInput} type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default Search;
