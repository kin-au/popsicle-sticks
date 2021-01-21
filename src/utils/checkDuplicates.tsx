interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

const checkDuplicates = (
  existingUsers: UserList,
  newUsers: UserList
): UserList => {
  let uniqueUsers: UserList = [];
  newUsers.forEach((user) => {
    if (existingUsers.find((existingUser) => existingUser.id === user.id)) {
      window.alert(`Unable to add duplicate user: ${user.username}`);
    } else {
      uniqueUsers.push(user);
    }
  });
  return uniqueUsers;
};

export default checkDuplicates;
