import toast from "react-hot-toast";

// validate login page username
export async function UserNameValidate(values) {
  const errors = userNameVerify({}, values);
  return errors;
}
// Validate Password
export async function PasswordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

// validate register form
export async function registerValidation(values) {
  const errors = userNameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

// validate reset Password
export async function validateResetPassword(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirmPWD) {
    errors.exist = toast.error("Password does not match");
  }
  return errors;
}

// profile validate
export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
}

//########Verification#########Verification##########Verification###########Verification
// Verify Username
function userNameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required");
  } else if (values.username.trim().length < 1) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
}

// Verify password
function passwordVerify(errors = {}, values) {
  /* eslint-disable no-useless-escape */
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.trim().length < 1) {
    errors.password = toast.error("Wrong Password");
  } else if (values.password.length < 4) {
    errors.password = toast.error(
      "Password must be more than 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special character");
  }

  return errors;
}

/** verify email */
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
}
