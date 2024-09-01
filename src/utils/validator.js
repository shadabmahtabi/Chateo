import { isValidUsername } from "6pp";

export const usernameValidator = (username) => {
  if (!isValidUsername(username)) {
    return {
      isValue: false,
      errorMessage: "Username must have only letters and numbers",
    };
  }
};
