import React from 'react';
import './App.css';
import BookSession from './Components/BookSession';
import Item from './Components/Item';
import Navbar from './Components/Navbar';
import img2 from '../src/Pages/images/img2.gif';

const APP = () => {
  return (
    <div>
        <Navbar/>
        <div className='content'>
        <section>
            <h2 className='heading'>Comprehensive learning programs & classes for all students</h2>
              <p className='subheading'>Become lifelong learners with India's best teachers,
                  engaging video lessons and personalised
                  learning journeys</p>

        </section>
        <BookSession className="booksession"/>
        </div>
        

        <div className='btn-list'>
          <button>Start Here</button>
          <button>Explore Courses</button>

        </div>

        <h1 className='classlist-head'>Choose Your Leaning Path</h1>

      <div className='class-list-container'>
        <button>Class 6</button>
        <button>Class 7</button>
        <button>Class 8</button>
        <button>Class 9</button>
        <button>Class 10</button>
        <button>Class 11</button>
        <button>Class 12</button>
        <button>IIT JEE</button>
        <button>NEET</button>

      </div>

      <img src={img2} className='learning-img' />
      <h1 className='img-head'>We Believe in High Quality Of Education</h1>
      <button className='learning-btn'>Explore Study Material</button>

    <Item/>

    </div>
  )
}

export default APP