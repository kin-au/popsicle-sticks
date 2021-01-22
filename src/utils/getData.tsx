type DataType = "user" | "organisation";

const token: string = process.env.GITHUB_TOKEN!;

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
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        window.alert(`Unable to find ${searchType}: ${searchText}`);
      }
    })
    .catch((err) => {
      throw new Error(`getData failed with error: ${err}`);
    });
};

export default getData;
