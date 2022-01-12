const isValidDate = (date) => {
  if (!date || date.length !== 3) return false;
  if (date[0] > new Date().getFullYear()) return false;
  if (date[0] < new Date().getFullYear() - 100) return false;
  const dayString = `${date[2]}`
  const monthString = `${date[1]}`
  const yearString = `${date[0]}`
  const proposedDateText = `${dayString.length === 1 ? `0${dayString}` : dayString}/${monthString.length === 1 ? `0${monthString}` : monthString}/${yearString}`
  const validateDateRegex = /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/
  return validateDateRegex.test(proposedDateText);
};

export default isValidDate;