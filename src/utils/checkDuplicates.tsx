interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
  selected: boolean;
}

interface UserList extends Array<User> {}

const checkDuplicates = (existingUsers: UserList, usersToCheck: UserList) => {
  let newUsers: UserList = [];
  usersToCheck.forEach((userToCheck) => {
    if (
      existingUsers.find((existingUser) => existingUser.id === userToCheck.id)
    ) {
      window.alert(`Unable to add duplicate user: ${userToCheck.username}`);
    } else {
      newUsers.push(userToCheck);
    }
  });
  return newUsers;
};

export default checkDuplicates;
