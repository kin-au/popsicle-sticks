export interface User {
  avatar: string;
  url: string;
  username: string;
  id: number;
}

export type UserList = User[];

export type SearchDataType = "user" | "organisation";
