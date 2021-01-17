type DataType = "user" | "organisation";

const token: string = process.env.GITHUB_TOKEN!;

const checkResponse = (response: any) => {
  if (response.status !== 200) {
    console.log(`Request error code: ${response.status}`);
    return;
  }
  return response.json();
};

const getData = (searchType: DataType, searchText: string) => {
  let url: string = "";
  if (searchType === "user") {
    url = `https://api.github.com/users/${searchText}`;
  } else if (searchType === "organisation") {
    url = `https://api.github.com/orgs/${searchText}/members`;
  }

  return fetch(url, {
    method: "GET",
    headers: {
      token: token,
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`getData failed with error: ${err}`);
    });
};

export default getData;
