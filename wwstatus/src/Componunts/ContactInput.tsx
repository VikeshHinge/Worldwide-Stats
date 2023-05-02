import React,{useState} from 'react'
import { ContactsType } from '../utils/Types'
import { MdClose } from "react-icons/md";

type Addprop = {
  handelSubmit:(newContact:ContactsType)=>void
}

const ContactInput = ({handelSubmit}:Addprop) => {
  const [view,setView]=useState(false)
  const [info,setInfo] = useState({first_name:'',last_name:'',status:'',id:Date.now()})

  const handelChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let {name,value} = e.target
    //console.log(name,value)
    setInfo({...info,[name]:value})
   }

   const handelClick:React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    handelSubmit(info)
   }

    
  return (
        <>
    <div className='w-fit  m-auto text-left'  style={{display:view?'block':'none'}} >
      
      <div className='flex justify-between p-2 pl-3 font-semibold pr-3 text-white bg-blue-500'>
      <h3>Add Contacts</h3>
      <button onClick={()=>setView(false)}> <MdClose  size='25px'/></button>
      </div>

       <form action="" className='p-5 border-2 border-t-0 w-fit m-auto text-left' >
           
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
              <input className='block w-full rounded-md border-1 py-1.5 pl-3 pr-20 text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400 mb-3  sm:text-md sm:leading-6' 
            placeholder='Enter First Name' type="text" name='first_name' onChange={handelChange}/>
            <input className='block w-full rounded-md border-1 py-1.5 pl-3 pr-20 text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400 mb-5 sm:text-md sm:leading-6'
             placeholder='Enter Last Name' type="text" name='last_name'onChange={handelChange} />
            </label>
          

            <div className='flex gap-5' >
            <label htmlFor="username" className="block text-md font-medium leading-6 text-gray-900">
            <input type="radio" name="status" value='active'onChange={handelChange} />  Active
            </label>
            <label htmlFor="username" className="block text-md font-medium leading-6 text-gray-900">
             <input  type="radio" name="status" value='inactive'onChange={handelChange}/> Inactive
            </label>
            </div>
          
        
            <input className='bg-blue-400 w-full py-2 px-4 text-lg font-semibold rounded-md mt-6' type="submit" onClick={handelClick}/>

    </form>
   
  </div>
  <button style={{display:!view?'block':'none'}}  onClick={()=>setView(true)} className='bg-blue-500 w-fit text-white m-auto py-2 px-4 text-lg font-semibold rounded-md mt-6'>Add Contact</button>
        </>
  )
}

export default ContactInput
