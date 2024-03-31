export function validateEmail(email) {
  // Regular expression for email validation
  var regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regExp.test(email);
}
