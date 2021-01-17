interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

type DataType = "user" | "organisation";

const handleUserData = (rawData: any, dataType: DataType): UserList => {
  let data = [];
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
      } as User;
    });
  }
  return data;
};

export default handleUserData;
