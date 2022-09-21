import { RootState } from 'store';

export const getContacts = (state: RootState) => state.contacts.contacts;
export const getName = (state: RootState) => state.contacts.inputName;
export const getEmailTextarea = (state: RootState) => state.contacts.inputEmail;
export const getPhone = (state: RootState) => state.contacts.inputPhone;
