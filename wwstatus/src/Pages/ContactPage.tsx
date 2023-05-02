import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getContact,addContact,updateContact,deleteContact } from '../Redux/Contact.Redux/Contactaction';
import { RootState } from '../Redux/Store';
import { ContactsType } from '../utils/Types';
import ContactInput from '../Componunts/ContactInput';
import ContactUpdate from '../Componunts/ContactUpdate';

const ContactPage = () => {
 const [count,setCount] = useState(0)
  const data:ContactsType[] = useSelector((store:RootState)=> store.contact)
  const dispatch = useDispatch()
  // console.log(data)

  const handelSubmit = (info:ContactsType) => {
    //console.log(info)
    dispatch(addContact(info))
 }

useEffect(()=>{
    dispatch(getContact())
},[dispatch])




  return (
    <div>
      <ContactInput handelSubmit={handelSubmit} /> 
      <h1> Contact page</h1>
       <h2>Update</h2>
       <ContactUpdate/>
      <div>
       {
        data && data?.map((ele,i)=>{
          return(
            <div key={i} style={{border:'1px solid',width:'300px'}}>
              <h3>Name:{ele.first_name}</h3>
              <h3>Status:{ele.status}</h3>
              <button onClick={()=>dispatch(updateContact(ele.id))} >Edit</button>
              <button onClick={()=>dispatch(deleteContact(ele.id))}>Delete</button>
            </div>
          )
        })
       }
      </div>
    </div>
  )
}

export default ContactPage
