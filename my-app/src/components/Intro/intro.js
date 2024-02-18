import React from 'react';
import './intro.css';
import bg from '../../assets/Me.png';
import btnImg from '../../assets/hireme.png';
import cv from '../../assets/Irfan Arshad - Developer - CV - 2024.pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import { useTypewriter } from 'react-simple-typewriter';
// import { Link } from 'react-scroll';

const Intro = () => {
  const [typeEffect] = useTypewriter({
    words: ['Software Developer', 'Web Developer', 'Game Developer'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello World, </span>
        <span className="introText">I'm <span className="introName">Irfan</span> <br />{typeEffect}<Cursor/> </span>
        <p className="introPara"> I'm an enthusiastic recent graduate with a strong educational foundation <br /> and a passion for launching my career in the field technology.</p>
        <div>
          <button className='btn' onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>
            <img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button>
          <a href={cv} download="Irfan Arshad - Developer - CV - 2024.pdf">
            <button className='cvBtn' >Download CV</button>
          </a>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;