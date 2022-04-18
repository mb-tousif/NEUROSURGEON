import React from 'react';
import myPicture from './image/round-gradient-designify.png'
const About = () => {
    return (
      <div className='md:grid md:grid-cols-2 p-2'>
        <div className="m-2 p-2 my-auto text-justify">
            <p className='text-xl font-bold text-center'>Assalamualaikum! I am AZIZUL HAQUE TOUSIF.</p>
            <p>Becoming a MERN Stack Web Developer is my passion! That's why I Sign up with Jhanker Mahbub in <a className='text-violet-800 font-semibold' href="https://web.programming-hero.com/">Programming-hero</a> web-development course. My course is going on. It's nearly 70% finished.Five month ago I did not know anything like what is HTML/CSS? Now I am doing hard work to learn web-development. InshoAllah very soon I will be a MERN stack web developer! </p>
        </div>
        <img className="m-2 hover:scale-105 p-2 h-96 mx-auto rounded-full shadow-2xl" src={myPicture} alt="myPhoto" />
      </div>
    );
};

export default About;