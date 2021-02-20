import handleOrganisationData from "./handleOrganisationData";

test("handleOrganisationData returns mapped data", () => {
  const organisationData = [
    {
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
    },
    {
      login: "username 2",
      id: 2,
      node_id: "node_id 2",
      avatar_url: "avatar 2",
      gravatar_id: "gravatar_id 2",
      url: "url 2",
      html_url: "url 2",
      followers_url: "followers_url 2",
      following_url: "following_url 2",
      gists_url: "gists_url 2",
      starred_url: "starred_url 2",
      subscriptions_url: "subscriptions_url 2",
      organizations_url: "organizations_url 2",
      repos_url: "repos_url 2",
      events_url: "events_url 2",
      received_events_url: "received_events_url 2",
      type: "type 2",
      site_admin: false,
    },
  ];

  expect(handleOrganisationData(organisationData)).toStrictEqual([
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
  ]);
});
