import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import HTML5img from '../../assets/html5.svg';
import CSSimg from '../../assets/css3.svg';
import JSimg from '../../assets/javascript.svg';
import JavaImg from '../../assets/java.svg';
import PHPimg from '../../assets/php-original.svg';
import SQLimg from '../../assets/mysql-original-wordmark.svg';
import CsharpImg from '../../assets/csharp-original.svg';



const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I specialise in the dynamic intersection of technology and creativity. I thrive on bringing ideas to life. My skill set extends to web /software development and UI/UX design, where I seamlessly blend technical expertise with a keen eye for creativity.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design </h2>
                        <p>Focuses on the visual elements of a product and the overall user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Developemnt</h2>
                        <p>Designing, creating and maintaining websites or web applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Software & App Development</h2>
                        <p>Creating and maintaining applications through design, coding, and testing.</p>
                    </div>
                </div>
            </div>

                <section id='skills2'>
                
                <span className="skillTitle">Programming Languages</span>

                <div className="icons">
                    <div className="row">
                        <img src={HTML5img} alt="HTML5img" className="HTML5img"/>
                    </div>
                    <div className="row">
                        <img src={CSSimg} alt="CSSimg" className="CSSimg"/>
                    </div>
                    <div className="row">
                        <img src={JSimg} alt="JSimg" className="JSimg"/> 
                    </div>
                </div>

            </section>

            <section id='skills3'>

                <div className="icons">
                    <div className="row">
                        <img src={JavaImg} alt="JavaImg" className="JavaImg"/>
                    </div>
                    <div className="row">
                        <img src={PHPimg} alt="PHPimg" className="PHPimg"/>
                    </div>
                    <div className="row">
                        <img src={SQLimg} alt="SQLimg" className="SQLimg"/>
                    </div>
                </div>

            </section>

            <section id='skills4'>

                <div className="icons">
                    <div className="row">
                        <img src={CsharpImg} alt="CsharpImg" className="CsharpImg"/>
                    </div>
                </div>

</section>




        </section>
        
    );
}

export default Skills