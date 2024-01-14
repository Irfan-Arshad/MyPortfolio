import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';



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
                        <p>UI/UX design focuses on the visual elements of a product and the overall user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Developemnt</h2>
                        <p>Web development involves creating and maintaining websites or web applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Software Development</h2>
                        <p>
Creating and maintaining software applications through design, coding, and testing.</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills