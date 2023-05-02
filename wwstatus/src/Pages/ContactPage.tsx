import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getContact,addContact,updateContact,deleteContact } from '../Redux/Contact.Redux/Contactaction';
import { RootState } from '../Redux/Store';
import { ContactsType } from '../utils/Types';
import ContactInput from '../Componunts/ContactInput';
import ContactUpdate from '../Componunts/ContactUpdate';
import { MdDeleteForever,MdOutlineModeEditOutline } from "react-icons/md";

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
    <div className='p-10'>
      <ContactInput handelSubmit={handelSubmit} /> 

       Updates
       {/* <ContactUpdate/> */}
      <div className='grid grid-cols-4 gap-3 w-fit  m-auto'>
       {
        data && data?.map((ele,i)=>{
          return(
            <div key={i} className=' border-dotted border-2 border-black w-fit p-5 rounded-md'>
              <div className='flex gap-5 items-center border-dashed '>
                <img className='w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODZob7ROpqlx8WXwjueNwTOlC6Qum-yMiyfXiFRXkdhkHgybCpdvM1UpaXCL1ycfO8NI&usqp=CAU" alt="user" />
                <div>
                <p className='font-bold'>{ele.first_name} {ele.last_name}</p>
                <p>Status: {ele.status}</p>
                </div>
                  
              </div>
            
               <div className='flex gap-2 mt-1'>
                 <button className='bg-blue-500 w-fit text-white m-auto py-1 px-3 text-lg font-semibold rounded-md' onClick={()=>dispatch(updateContact(ele.id))} >
                 <div className='flex gap-1 items-center'>
                   <MdOutlineModeEditOutline/> Delete
                   </div>
                  </button>

                <button className='bg-red-500 w-fit text-white m-auto py-1 px-3 text-lg font-semibold rounded-md ' onClick={()=>dispatch(deleteContact(ele.id))}> 
                    <div className='flex gap-1 items-center'>
                    <MdDeleteForever/> Delete
                    </div>
                </button>
               </div>

            </div>
          )
        })
       }
      </div>
      ....................................
    </div>
  )
}

export default ContactPage
