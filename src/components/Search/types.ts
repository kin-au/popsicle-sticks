import { SearchDataType } from "../../types";

export interface SearchProps {
  disableInput: boolean;
  searchUsers: (
    searchType: SearchDataType,
    searchText: string
  ) => Promise<void>;
}
