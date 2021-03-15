import React from "react";
import { SearchProps } from "./types";
import { SearchDataType } from "../../types";
import Button from "../Elements/Button";

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
    <form className="flex flex-col mb-4 md:flex-grow md:mr-4">
      <div className="m-2 flex justify-between items-center">
        <label htmlFor="searchtext" className="m-2">
          Search
        </label>
        <input
          disabled={disableInput}
          id="searchtext"
          type="search"
          className="flex-grow border border-blue-900 rounded p-2 m-2"
          placeholder="Find a GitHub user or organisation"
          value={searchText}
          autoFocus
          required
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
      </div>
      <div className="m-2 flex justify-between items-center">
        <label htmlFor="searchtype" className="m-2">
          Type
        </label>
        <select
          disabled={disableInput}
          id="searchtype"
          className="flex-grow border cursor-pointer border-blue-900 bg-white rounded p-2 m-2"
          value={searchType}
          required
          onChange={(event) =>
            setSearchType(event.target.value as SearchDataType)
          }
        >
          <option value="user">User</option>
          <option value="organisation">Organisation</option>
        </select>
        <Button
          type="submit"
          disabled={disableInput}
          onClick={handleSubmit}
          text="Add"
        />
      </div>
    </form>
  );
};

export default Search;
