import { GetUserDataResponse, UserList } from "../types";

const handleUserData = (responseData: GetUserDataResponse): UserList => {
  let data: UserList = [];
  // OR can be written as (exactly the same, just your own pref)
  // let data = [] as UserList;
  if (responseData) {
    data = [
      {
        avatar: responseData.avatar_url,
        url: responseData.html_url,
        username: responseData.login,
        id: responseData.id,
      },
    ];
  }
  return data;
};

export default handleUserData;
