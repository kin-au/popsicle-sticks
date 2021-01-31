import { UserList } from "../../types";

export interface ControlsProps {
  userList: UserList;
  setUserList: React.Dispatch<React.SetStateAction<UserList>>;
  selectedUserId: number | null;
  setSelectedUserId: React.Dispatch<React.SetStateAction<number | null>>;
  disableInput: boolean;
  rememberSelected: boolean;
  setRememberSelected: React.Dispatch<React.SetStateAction<boolean>>;
}
