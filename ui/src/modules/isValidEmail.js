const isValidEmail = (email) => {
  if (!email || email.trim().length === 0) return false;
  const validateEmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return validateEmailRegex.test(email.trim());
};

export default isValidEmail;