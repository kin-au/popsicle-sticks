const checkResponse = (response: any) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

const getOrg = (organisation: string) => {
  return fetch(`https://api.github.com/orgs/${organisation}/members`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`getOrg failed with error: ${err}`);
    });
};

export default getOrg;
