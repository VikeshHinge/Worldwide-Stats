import {GETALLCONTACT,ADDCONTACT,UPDATECONTACT,DELETECONTACT} from './Contact.type.js';
import { ContactsType } from '../../utils/Types.js';

export const getContact = ()=> ({type:GETALLCONTACT})
export const addContact = (contact:ContactsType) => ({type:ADDCONTACT,payload:contact})
export const updateContact = (id:ContactsType) => ({type:UPDATECONTACT,payload:id})
export const deleteContact = (id:ContactsType) => ({type:DELETECONTACT,payload:id})