import {GETALLCONTACT,ADDCONTACT,UPDATECONTACT,DELETECONTACT} from './Contacttype';
import { ContactsType } from '../../utils/Types';

export const getContact = ()=> ({type:GETALLCONTACT})
export const addContact = (contact:ContactsType) => ({type:ADDCONTACT,payload:contact})
export const updateContact = (id:ContactsType) => ({type:UPDATECONTACT,payload:id})
export const deleteContact = (id:ContactsType) => ({type:DELETECONTACT,payload:id})