import { UserList } from "../../types";

export interface PopsicleAreaProps {
  userList: UserList;
  setUserList: any;
  selectedUserId: any;
  setSelectedUserId: any;
  disableInput: boolean;
  rememberSelected: boolean;
  setRememberSelected: any;
}
