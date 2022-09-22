import { AxiosError } from 'axios';

export const CONTACTS_SLICE_ALIAS = 'contacts';

export interface IContactItem {
  user: string;
  phone: string;
  email: string;
  id: number | string;
}

export interface IContactsSlice {
  contacts: Array<IContactItem>;
  inputName: string;
  inputEmail: string;
  inputPhone: string;
  addName: string;
  addEmail: string;
  addPhone: string;
  searchInput: string;
  filterContacts: Array<IContactItem>;
  loading: boolean;
  error: AxiosError | null;
}
