const token: string = process.env.GITHUB_TOKEN!;

const checkResponse = (response: any) => {
  if (response.status !== 200) {
    console.log(`Request error code: ${response.status}`);
    return;
  }
  return response.json();
};

const getOrg = (organisation: string) => {
  return fetch(`https://api.github.com/orgs/${organisation}/members`, {
    method: "GET",
    headers: {
      token: token,
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`getOrg failed with error: ${err}`);
    });
};

export default getOrg;
