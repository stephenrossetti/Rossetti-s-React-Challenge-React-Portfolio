export function validateEmail(email) {
  // Regular expression for email validation
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
