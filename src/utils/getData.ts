type DataType = "user" | "organisation";
type UserResponse = any; // need to define these
type OrganisationResponse = any; // need to define these
type GetDataResponse = UserResponse | OrganisationResponse;

// better option is to have 2 fn's to do user / organisation

const token: string = process.env.GITHUB_TOKEN!;

const getData = (
  searchType: DataType,
  searchText: string
): Promise<GetDataResponse> => {
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
        return response.json() as GetDataResponse;
        // at this point should tell it which object type it would be
        // 'if' searchtype = x, then (create a type for 'user' response), and then say response.json() as UserResponse... or OrganisationResponse
        // 'as' = you're telling TS "it's going to be X"
      } else {
        window.alert(`Unable to find ${searchType}: ${searchText}`);
      }
    })
    .catch((err) => {
      throw new Error(`getData failed with error: ${err}`);
    });
};

export default getData;
