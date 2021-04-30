const isValidPhone = (phone) => {
  if (!phone || phone.trim().length === 0) return false;
  const validatePhoneRegex = /(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/
  return validatePhoneRegex.test(phone.trim());
};

export default isValidPhone;