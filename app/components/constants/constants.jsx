export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const ACCESS_TOKEN = "access_token";
export const EMAIL_REGEX_EXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const DUMMY_REGEX_EXP = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const URL_REGEX_EXP =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_REGEX_EXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;


  export const PHONE_NUMBER_REGEX = /^\+?[0-9\s()-]+$/; 

export const LOADER_STATUS = {
  NA: -1,
  PENDING: 1,
  COMPLETE: 0,
};
