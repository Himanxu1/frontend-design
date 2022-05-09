import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");
  return (
    <div className='login-form'>
        <iframe src="https://embed.lottiefiles.com/animation/88367"></iframe>
        <div className='form'>
            <form>
                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/><br/>
                <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/><br/>
                <input type="text" placeholder='Enter Phone' onChange={(e) => setPhone(e.target.value)}/><br/>
                 <button>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login;

