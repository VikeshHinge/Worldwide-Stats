import { ContactsType } from '../../utils/Types';
import {GETALLCONTACT,ADDCONTACT,UPDATECONTACT,DELETECONTACT} from './Contacttype';

type ContactState = {
    contact:ContactsType[];
}
type Actiontype ={
    type:String,
    payload?:any
   //ContactsType|number|ContactsType[]
}

let initialvalue:ContactState ={
    contact:[]
}

export const ContactReducer = (state:ContactState=initialvalue,{type,payload}:Actiontype):ContactState => {
        
      switch(type){

        case GETALLCONTACT:{
            return state;
        }

        case ADDCONTACT: {
            return {
                ...state,
                contact:[...state.contact,payload]
            }
        }
        case UPDATECONTACT: {
           console.log(payload)
           return state;
        }

        case DELETECONTACT: {
            let newData = state.contact.filter((ele)=>ele.id!==payload)
            console.log(newData)
            return {
                ...state,
                contact:newData
            }
         }


        default:{
            return state;
        }
      }

}