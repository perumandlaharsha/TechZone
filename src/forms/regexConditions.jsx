export const regexConditions = 
{
  namePattern: /^[A-Z][a-z]{5,8}$/,
  PassPattern: /^(?=.{5,8}$)(?=.*[A-Z])(?=.*\d)(?=.*[\w]).+$/,
  emailPattern: /^[A-Za-z0-9_+%]+@[A-Za-z0-9-+]+\.[A-Za-z]{2,}/,
  mobilePattern: /^[6-9][0-9]{9}$/,
};