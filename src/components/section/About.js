import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'
import './About.css'

const About = () => {
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not-dark2"></div>
                <div className="col-12 offset-md-1 col-md-6 about">
                    <div className="About-title-box">
                        <h1 id="About" className="red-line">{section2title}</h1>
                    </div>
                    <p className="lead about-text" >
                        {about.paragraph}
                    </p>
                </div>
            </div>
            <div id="Skills">
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) =>
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} />
                    )}̀
                </div>
            </div>
        </div >
    )
}

export default About
