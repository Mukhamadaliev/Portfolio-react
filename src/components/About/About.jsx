import React from 'react';
import './about.css';
import img2 from './img/image.png'

const About = () => {
  return (
    <div className="background-about">

      <section id="about" className="section" data-aos="fade-up">
        <div className="about">
          <div className="about-left">
            <img src={img2} alt="" />

          </div>
          <div className="about-right">
            <h1>About Me</h1>
            <p>I’m Ibrohim, a passionate Frontend Developer with over 1 years of professional experience. I specialize in building modern, responsive, and user-friendly web applications using React, Tailwind CSS, and other cutting-edge technologies.</p>
            <br />
            <p>Throughout my career, I have successfully delivered multiple projects, ensuring clean code, performance optimization, and seamless user experience.</p>
            <div class="cards-container">
              <div class="card">
                <div class="card-number">+1</div>
                <div class="card-text">
                  <span>Years of</span>
                  <span>Experience</span>
                </div>
              </div>

              <div class="card">
                <div class="card-number">+16</div>
                <div class="card-text">
                  <span>Happy</span>
                  <span>Customers</span>
                </div>
              </div>

              <div class="card">
                <div class="card-number">+2</div>
                <div class="card-text">
                  <span>Completed</span>
                  <span>Projects</span>
                </div>
              </div>

              <div class="card">
                <div class="card-number">+10</div>
                <div class="card-text">
                  <span>Total</span>
                  <span>school</span>
                </div>
              </div>
            </div>
            <button className='About-btn'>Download CV</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
