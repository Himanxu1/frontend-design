import React from 'react';
import Navbar from '../../Components/Navbar';
import './SignUp.css';
import { useState } from 'react';

const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");

  

  return (
   <>
   <Navbar/>
   <div className='sign-form'>
        <iframe src="https://embed.lottiefiles.com/animation/71548" className='signup-animation'></iframe>
        <div className='form'>
            <form>
                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/><br/>
                <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/><br/>
                <input type="text" placeholder='Enter Phone' onChange={(e) => setPhone(e.target.value)}/><br/>
                 <button>SignUp</button>
            </form>
        </div>
      
    </div>
    </>
   
  )
}

export default Signup