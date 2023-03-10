import { statusStype } from "./constants";

export type User = {
  businessPhones: string[];
  displayName: string;
  id: string;
  jobTitle: string;
  mail: string;
  mobilePhone: string;
  officeLocation: string;
  preferredLanguage: string;
  surname: string;
  userPrincipalName: string;
};

export type ExtendedUser = {
  displayName: string;
  givenName: string;
  surname: string;
  companyName: string;
  department: string;
  jobTitle: string;
  mail: string;
  mailNickname: string;
  mobilePhone: string;
} & {
  officeLocation: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
};

export type UserOnPrem = {
  mailNickname: string;
  onPremisesSamAccountName: string;
};

export type UserPresence = {
  activity?: string;
  availability?: string;
};

export type StatusType = typeof statusStype[number] | string;
