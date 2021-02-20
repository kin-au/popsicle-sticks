import handleUserData from "./handleUserData";

test("handleUserData returns mapped data", () => {
  const userData = {
    login: "username 1",
    id: 1,
    node_id: "node_id 1",
    avatar_url: "avatar 1",
    gravatar_id: "gravatar_id 1",
    url: "url 1",
    html_url: "url 1",
    followers_url: "followers_url 1",
    following_url: "following_url 1",
    gists_url: "gists_url 1",
    starred_url: "starred_url 1",
    subscriptions_url: "subscriptions_url 1",
    organizations_url: "organizations_url 1",
    repos_url: "repos_url 1",
    events_url: "events_url 1",
    received_events_url: "received_events_url 1",
    type: "type 1",
    site_admin: false,
    name: "name 1",
    company: "data",
    blog: "blog 1",
    location: "data",
    email: "data",
    hireable: "data",
    bio: "data",
    twitter_username: "data",
    public_repos: 1,
    public_gists: 1,
    followers: 1,
    following: 1,
    created_at: "created_at 1",
    updated_at: "updated_at 1",
  };

  expect(handleUserData(userData)).toStrictEqual([
    {
      avatar: "avatar 1",
      url: "url 1",
      username: "username 1",
      id: 1,
    },
  ]);
});
