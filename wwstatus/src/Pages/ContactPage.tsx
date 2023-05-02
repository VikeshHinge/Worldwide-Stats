import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const ContactPage = () => {

const data = useQuery('data-get',()=>{
      axios.get('')
})

  return (
    <div>
      <h1> Contact page</h1>
    </div>
  )
}

export default ContactPage
