const checkResponse = (response: any) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

const getUser = (username: string) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`getUser failed with error: ${err}`);
    });
};

export default getUser;
