import { GetUserDataResponse } from "../types";

const token = process.env.GITHUB_TOKEN!;

const getUserData = (searchText: string): Promise<GetUserDataResponse> => {
  const url = `https://api.github.com/users/${searchText}`;
  return fetch(url, {
    method: "GET",
    headers: {
      token: token,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json() as GetUserDataResponse;
        // at this point should tell it which object type it would be
        // 'if' searchtype = x, then (create a type for 'user' response), and then say response.json() as UserResponse... or OrganisationResponse
        // 'as' = you're telling TS "it's going to be X"
      } else {
        window.alert(`Unable to find user: ${searchText}`);
      }
    })
    .catch((err) => {
      throw new Error(`getUserData failed with error: ${err}`);
    });
};

export default getUserData;
