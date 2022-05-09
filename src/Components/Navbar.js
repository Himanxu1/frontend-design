import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import styled from 'styled-components';


const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 10px 20px;
    padding: 10px 20px;
    border: 2px solid palevioletred;
    border-radius: 3px;
    align-item: center;
`

const Navbar = () => {
  return (
    <div className='nav'>
        <ul>
            <Link to="/studymaterial" className='link'><li>Study Material</li></Link>
            <Link to="/buycourses" className='link'><li>Buy Courses</li></Link>
           <Link to="/aboutus" className='link'><li>About US</li></Link>
            <li>Contact US</li>
            <Button><Link to="/signup" style={{color:"pink" ,textDecoration:"none"}}>Sign Up</Link></Button>
            <Button primary><Link to="/login" className='link'>Login</Link></Button>
        </ul>
    </div>
  )
}

export default Navbar