import React from 'react'
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
<div className='home'>
<div className="hero-content">
  <div className='slide-in'>
  <h1 >Discover the Latest Trends</h1>
            <p >Shop the best fashion collections at unbeatable prices.</p>
            <Link to="/shop" className="button slide-in">Shop Now</Link>
  </div>

        </div>
</div>
    </>
  )
}

export default Home