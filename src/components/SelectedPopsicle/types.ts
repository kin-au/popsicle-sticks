import { UserList } from "../../types";

export interface SelectedPopsicleProps {
  userList: UserList;
  setUserList: any;
  selectedUserId: any;
  setSelectedUserId: any;
  disableInput: boolean;
  rememberSelected: boolean;
  setRememberSelected: any;
}
