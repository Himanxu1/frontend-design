import React from 'react';
import Navbar from '../../Components/Navbar';
import img1 from '../images/img1.png';
import Profile1 from '../images/Profile1.jpg';
import Profile2 from '../images/Profile2.jpg';
import Profile3 from '../images/Profile3.jpg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
   <Navbar/>
   <h1>Imagining Teaching and Learning</h1>
   <h2>Why We Exist</h2>
   <img src={img1} alt="teaching" className='img1' />
 <p>
 Teaching process has stayed the same for decades. The traditional teaching and offline education system are plagued with multiple inefficiencies.
 </p>
 <p>
 Our vision at Vedantu is to reimagine and evolve the way teaching 
and learning have been happening for decades. By combining 
quality teachers, engaging content and superior technology we 
are able to create a superior learning experience for students and 
aid in their outcome improvement, which is unlike any offline experience.   
</p>
<p>
Teaching and learning are set to transform at a rapid pace and our mission
 at Vedantu is to accelerate these transformations.</p>
 <h1>Who We Are ?</h1>
 <iframe width="360" height="90" src="https://www.youtube.com/embed/vV0mj43AI3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <div className='founder-list'>
   <div className='list1'>
   <img src={Profile1} />
   <h2>Founder</h2>
   </div>
 <div className='list1'>
 <img  src={Profile2} />
   <h2>Co-Founder</h2>
 </div>
   <div className='list1'>
   <img src={Profile3} />
   <h2>Co-Founder</h2>
   </div>
  
 </div>
 
   </>
  )
}

export default AboutUs