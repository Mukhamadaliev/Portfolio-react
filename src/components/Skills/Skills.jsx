import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'HTML5', percentage: 85, icon: 'bxl-html5', color: '#e44d26' },
        { name: 'CSS', percentage: 80, icon: 'bxl-css3', color: '#264de4' },
        { name: 'Bootstrap', percentage: 70, icon: 'bxl-bootstrap', color: '#563d7c' },
        { name: 'JavaScript', percentage: 73, icon: 'bxl-javascript', color: '#f0db4f' },
        { name: 'React', percentage: 75, icon: 'bxl-react', color: '#61dbfb' },
        { name: 'Figma', percentage: 70, icon: 'bxl-figma', color: '#f24e1e' },
    ];

    <br />
    return (
        <div className="background-skills" data-aos="fade-up">

            <section id='Skills' className='section'>

                <div className="skills-container">
                    <div className="div-skills-max">
                        <h1 className='h1-skills'>Skills</h1>

                        <div className="skills-row">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <i className={`bx ${skill.icon}`} style={{ color: skill.color }}></i>
                                    <div className="skill-name">{skill.name}</div>
                                    <div className="skill-percentage">{skill.percentage}%</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{
                                                width: `${skill.percentage}%`,
                                                background: skill.color
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
