import { AxiosError } from 'axios';

export const CONTACTS_SLICE_ALIAS = "contacts";

export interface IContactItem {
    user: string;
    phone: string;
    email: string;
}

export interface IContactsSlice {
    contacts: Array<IContactItem>;
    loading: boolean;
    error: AxiosError | null;
}