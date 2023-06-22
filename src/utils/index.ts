import { User } from '@data-types';

export const getAppUser = (): User =>
  JSON.parse(localStorage.getItem('appUser') || '') as User;
