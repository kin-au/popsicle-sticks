import { User, UserList } from "../../types";

export interface PopsiclePotProps {
  userList: UserList;
  setUserList: React.Dispatch<React.SetStateAction<UserList>>;
  selectedUserId: number | null;
  setSelectedUserId: React.Dispatch<React.SetStateAction<number | null>>;
  previouslySelectedUserId: number[];
  setPreviouslySelectedUserId: React.Dispatch<React.SetStateAction<number[]>>;
  disableInput: boolean;
  rememberSelected: boolean;
}

export interface PopsicleStickProps {
  user: User;
  userList: UserList;
  setUserList: React.Dispatch<React.SetStateAction<UserList>>;
  previouslySelectedUserId: number[];
  setPreviouslySelectedUserId: React.Dispatch<React.SetStateAction<number[]>>;
  disableInput: boolean;
}

export interface SelectedPopsicleProps {
  userList: UserList;
  selectedUserId: number | null;
  setSelectedUserId: React.Dispatch<React.SetStateAction<number | null>>;
  previouslySelectedUserId: number[];
  setPreviouslySelectedUserId: React.Dispatch<React.SetStateAction<number[]>>;
  rememberSelected: boolean;
}
