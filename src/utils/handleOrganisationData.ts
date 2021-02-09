import {
  GetOrganisationDataResponse,
  OrganisationUser,
  UserList,
} from "../types";

const handleOrganisationData = (
  responseData: GetOrganisationDataResponse
): UserList => {
  let data: UserList = [];
  if (responseData) {
    data = responseData.map((user: OrganisationUser) => {
      return {
        avatar: user.avatar_url,
        url: user.html_url,
        username: user.login,
        id: user.id,
      };
    });
  }
  return data;
};

export default handleOrganisationData;
