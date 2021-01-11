const token: string = process.env.GITHUB_TOKEN!;

const checkResponse = (response: any) => {
  if (response.status !== 200) {
    console.log(`Request error code: ${response.status}`);
    return;
  }
  return response.json();
};

const getUser = (username: string) => {
  return fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    headers: {
      token: token,
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`getUser failed with error: ${err}`);
    });
};

export default getUser;
