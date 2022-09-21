import { AxiosError } from 'axios';

export const CONTACTS_SLICE_ALIAS = 'contacts';

export interface IContactItem {
  user: string;
  phone: string;
  email: string;
  id: number
}

export interface IContactsSlice {
  contacts: Array<IContactItem>;
  inputName: string;
  inputEmail: string;
  inputPhone: string;
  loading: boolean;
  error: AxiosError | null;
}
