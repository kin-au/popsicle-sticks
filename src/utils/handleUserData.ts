interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

// interface UserList extends Array<User> {}
// same as writing:
type UserList = User[];

type DataType = "user" | "organisation";

const handleUserData = (rawData: any, dataType: DataType): UserList => {
  let data: UserList = [];
  // OR can be written as (exactly the same, just your own pref)
  // let data = [] as UserList;
  if (rawData) {
    if (dataType === "user") {
      data = [
        {
          avatar: rawData.avatar_url,
          url: rawData.html_url,
          username: rawData.login,
          id: rawData.id,
          selected: false,
        },
      ];
    } else if (dataType === "organisation") {
      data = rawData.map((user: any) => {
        return {
          avatar: user.avatar_url,
          url: user.html_url,
          username: user.login,
          id: user.id,
          selected: false,
        };
      });
    }
  }
  return data;
};

export default handleUserData;
