import React from 'react';
import './intro.css';
import bg from '../../assets/Me.png';
import btnImg from '../../assets/hireme.png';
// import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello World, </span>
            <span className="introText">I'm <span className="introName">Irfan</span> <br />Graduate Developer</span>
            <p className="introPara"> I'm an enthusiastic recent graduate with a strong educational foundation <br/> and a passion for launching my career in the field of software / web development.</p>
            <button className='btn' onClick={() => {
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
              }}>
            <img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;