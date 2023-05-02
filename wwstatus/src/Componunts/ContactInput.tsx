import React,{useState} from 'react'
import { ContactsType } from '../utils/Types'

type Addprop = {
  handelSubmit:(newContact:ContactsType)=>void
}

const ContactInput = ({handelSubmit}:Addprop) => {
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
     <div>
      <form action="">
              <input type="text" name='first_name' value={info.first_name} onChange={handelChange}/>
              <input type="text" name='last_name' value={info.last_name}  onChange={handelChange} />
             Active: <input type="radio" name="status" value='active'onChange={handelChange} />
             Inactive: <input type="radio" name="status" value='inactive'onChange={handelChange} />
              <input type="submit" onClick={handelClick}/>
      </form>
     </div>
  )
}

export default ContactInput
