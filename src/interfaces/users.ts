export interface ListOfUsersResponse {
  message: string;
  count: Number;
  userDTOs: userDTOsInterface | undefined;
}

export interface userDTOsInterface {
  userDTOs: {
    deactivated: boolean;
    email: string;
    firstname: string;
    loggedInUser: boolean;
    pk: Number;
    profilePicture: string;
    surname: string;
    type: string;
  }[];
}

export interface userInfoInterface {
  deactivated: boolean;
  email: string;
  firstname: string;
  loggedInUser: boolean;
  pk: Number;
  profilePicture: string;
  surname: string;
  phoneNo: string;
  bvn: string;
  address: string;
  type: string;
  beneficiaries: Number;
  projects: Number;
}

export interface userInterface {
  aud: string;
  exp: string;
  family_name: string;
  given_name: string;
  groups: string[];
  is_admin: boolean;
  is_agent: boolean;
  is_beneficiary: boolean;
  is_deactivated: boolean;
  is_financier: boolean;
  is_merchant: boolean;
  is_returning_member: boolean;
  is_verified: boolean;
  preferred_username: string;
  reset_pwd: string;
}
