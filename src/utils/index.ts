import { User } from '@data-types';

export const getAppUser = (): User => {
  try {
    return JSON.parse(localStorage.getItem('appUser'));
  } catch {
    return null;
  }
};

export const convertCamelCaseToTitleCase = (str: string) => {
  // Add a space before every capital letter
  str = str.replace(/([A-Z])/g, ' $1');
  // Convert the string to title case
  str = str.replace(/^./, function (match) {
    return match.toUpperCase();
  });
  return str;
};
