import { GetOrganisationDataResponse } from "../types";

const token = process.env.GITHUB_TOKEN!;

const getOrganisationData = (
  searchText: string
): Promise<GetOrganisationDataResponse> => {
  const url = `https://api.github.com/orgs/${searchText}/members`;
  return fetch(url, {
    method: "GET",
    headers: {
      token: token,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json() as GetOrganisationDataResponse;
      } else {
        window.alert(`Unable to find organisation: ${searchText}`);
      }
    })
    .catch((err) => {
      throw new Error(`getOrganisationData failed with error: ${err}`);
    });
};

export default getOrganisationData;
