import checkDuplicates from "./checkDuplicates";

const existingUsers = [
  {
    avatar: "avatar 1",
    url: "url 1",
    username: "username 1",
    id: 1,
  },
  {
    avatar: "avatar 2",
    url: "url 2",
    username: "username 2",
    id: 2,
  },
  {
    avatar: "avatar 3",
    url: "url 3",
    username: "username 3",
    id: 3,
  },
];

test("checkDuplicates returns array with duplicates removed and displays alert", async () => {
  window.alert = jest.fn();
  let newUsersWithDuplicate = [
    {
      avatar: "avatar 2",
      url: "url 2",
      username: "username 2",
      id: 2,
    },
    {
      avatar: "avatar 4",
      url: "url 4",
      username: "username 4",
      id: 4,
    },
  ];
  expect(checkDuplicates(existingUsers, newUsersWithDuplicate)).toStrictEqual([
    {
      avatar: "avatar 4",
      url: "url 4",
      username: "username 4",
      id: 4,
    },
  ]);
  expect(window.alert).toHaveBeenCalledTimes(1);
});

test("checkDuplicates returns array of unique values", () => {
  let newUsersWithoutDuplicate = [
    {
      avatar: "avatar 4",
      url: "url 4",
      username: "username 4",
      id: 4,
    },
    {
      avatar: "avatar 5",
      url: "url 5",
      username: "username 5",
      id: 5,
    },
  ];
  expect(
    checkDuplicates(existingUsers, newUsersWithoutDuplicate)
  ).toStrictEqual([
    {
      avatar: "avatar 4",
      url: "url 4",
      username: "username 4",
      id: 4,
    },
    {
      avatar: "avatar 5",
      url: "url 5",
      username: "username 5",
      id: 5,
    },
  ]);
});
