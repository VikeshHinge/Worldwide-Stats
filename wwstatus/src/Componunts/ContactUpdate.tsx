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
    <div>
      <form action="">
              <input type="text" name='first_name' onChange={handelchange}/>
              <input type="text" name='last_name'onChange={handelchange} />
             Active: <input type="radio" name="status" value='active'onChange={handelchange} />
             Inactive: <input type="radio" name="status" value='inactive'onChange={handelchange} />
              <input type="submit"/>
      </form>
    </div>
  )
}

export default ContactUpdate
