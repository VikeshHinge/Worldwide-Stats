import React, { useState } from 'react';

type changes = {
    first_name?:String,
    last_name?:String,
    status?:String
}

const ContactUpdate = () => {
const [changes,setChanges] = useState({})


const handelchange = () => {
    
}

  return (
    <div className='p-5 border-2 w-fit m-auto text-left'>
      <form action="">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <input className='block w-full rounded-md border-1 py-1.5 pl-3 pr-20 text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400  sm:text-md sm:leading-6' 
              placeholder='Enter First Name' type="text" name='first_name' onChange={handelchange}/><br />
              <input className='block w-full rounded-md border-1 py-1.5 pl-3 pr-20 text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400 sm:text-md sm:leading-6'
               placeholder='Enter Last Name' type="text" name='last_name'onChange={handelchange} /><br />

              <div className='flex gap-5' >
              <label htmlFor="username" className="block text-md font-medium leading-6 text-gray-900">
              <input type="radio" name="status" value='active'onChange={handelchange} />  Active
              </label>
              <label htmlFor="username" className="block text-md font-medium leading-6 text-gray-900">
               <input  type="radio" name="status" value='inactive'onChange={handelchange} /> Inactive
              </label>
              </div>
            
          
              <input className='bg-blue-400 w-full py-2 px-4 text-lg font-semibold rounded-md mt-6' type="submit" />

      </form>
    </div>
  )
}

export default ContactUpdate
