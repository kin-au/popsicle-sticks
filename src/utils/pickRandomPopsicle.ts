interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

const pickRandomPopsicle = (userList: UserList): User => {
  const user = userList[Math.floor(Math.random() * userList.length)];
  // user.selected = true;
  return user;
};

export default pickRandomPopsicle;
