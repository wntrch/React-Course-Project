export const validateContactForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Must be at least 2 characters";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Must be at least 2 characters";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  }

  const reg = /^\d+$/; //make sure all values are numbers
  if (!values.phoneNum) {
    errors.phoneNum = "Required";
  } else if (!reg.test(values.phoneNum)) {
    errors.phoneNum = "The phone number should contain only numbers";
  } else if (values.phoneNum.length < 10) {
    errors.phoneNum = "Must be at least 10 numbers (include area code)";
  }

  if (!values.email.includes("@")) {
    errors.email = "Email should contain a @";
  }

  return errors; //if any field does not pass validation, return error message for specific field
};
