import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const getContactsInitial = (state: RootState) => state.contacts.contacts;

export const getName = (state: RootState) => state.contacts.inputName;
export const getEmailTextarea = (state: RootState) => state.contacts.inputEmail;
export const getPhone = (state: RootState) => state.contacts.inputPhone;

export const getNameAdd = (state: RootState) => state.contacts.addName;
export const getEmailAdd = (state: RootState) => state.contacts.addEmail;
export const getPhoneAdd = (state: RootState) => state.contacts.addPhone;

export const getSeartchInput = (state: RootState) => state.contacts.searchInput;
export const getFilterContact = (state: RootState) => state.contacts.filterContacts;

export const getContacts =  (state: RootState) => {
    if(state.contacts.searchInput) {
        return state.contacts.filterContacts;
    }

    return state.contacts.contacts;
}