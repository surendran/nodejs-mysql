const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegistrationInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordToConfirm = !isEmpty(data.passwordToConfirm)
    ? data.passwordToConfirm
    : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.passwordToConfirm)) {
    errors.passwordToConfirm = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.passwordToConfirm)) {
    errors.passwordToConfirm = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
