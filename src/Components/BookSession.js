import React from 'react';
import { useState } from 'react';
import './BookSession.css'

const BookSession = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");

  return (
    <div className='contact'>
        <form >
            <h1>Book A Free Demo Session</h1>
            <h3>Enter Details</h3>
            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/><br/>
                <input type="text" placeholder='Mobile Number' onChange={(e) => setPhone(e.target.value)}/><br/>
                <input type="text" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/><br/>
                 <button>Book a Slot</button>
        </form>

    </div>
  )
}

export default BookSession