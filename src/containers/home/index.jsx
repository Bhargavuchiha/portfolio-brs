import React from 'react';
import './styles.scss';
import { Animate } from 'react-simple-animate';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id='home' className='home'>
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Bhargav Sable
          <br />
          Software Engineer
        </h1>
        <Animate
        play
        duration={1.5}
        delay={1}
        start={
          {transform: "translateY(550px)",

          }}
          end={
            {transform: "translatex(0px)",}
          }>
        <div className="home__contact-me">
          <Link to="/contact">
            <button className='butto'>
              Available for jobs
            </button>
          </Link>
        </div>
        </Animate>
        
      </div>
    </section>
  );
};

export default Home;
