import { User, UserList } from "../../types";

export interface PopsiclePotProps {
  userList: UserList;
  setUserList: React.Dispatch<React.SetStateAction<UserList>>;
  selectedUserId: number | null;
  setSelectedUserId: React.Dispatch<React.SetStateAction<number | null>>;
  disableInput: boolean;
  rememberSelected: boolean;
  setRememberSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SelectedPopsicleProps {
  userList: UserList;
  setUserList: React.Dispatch<React.SetStateAction<UserList>>;
  selectedUserId: number | null;
  setSelectedUserId: React.Dispatch<React.SetStateAction<number | null>>;
  disableInput: boolean;
  rememberSelected: boolean;
  setRememberSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PopsicleStickProps {
  user: User;
}
