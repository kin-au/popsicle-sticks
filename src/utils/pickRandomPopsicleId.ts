const pickRandomPopsicleId = (userList: number[]): number => {
  return userList[Math.floor(Math.random() * userList.length)];
};

export default pickRandomPopsicleId;
