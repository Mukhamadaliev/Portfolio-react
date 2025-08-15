import React from 'react';
import './home.css';
import img1 from './img/image.png';
import { MdDownload } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";





const Home = () => {
    return (
        <div className="background-Home">
            <div className="max-width">

            <section id="home" className="section">
                <div className="heme">

                    <div className="div-home-left">
                        <h1>Hello, I am <b>Ibrohim</b></h1>
                        <h3>Frontend Developer & UI Designer</h3>
                        <br />
                        <p>I create modern, responsive and beautiful web experiences. With 1+ years of experience building interfaces with React, Tailwind and other modern tools.</p>
                        <br />
                                <button className='btn-home-btn'>Downldad CV <MdDownload /></button>

                            <a href="https://t.me/Mukhamadaliyev20" className='telegram'><FaTelegramPlane /></a>
                            <a href="https://www.instagram.com/ibrohim_325" className='instagram'><FaInstagram /></a>
                            <a href="https://www.github.com/Mukhmmadaliev" className='github'><IoLogoGithub /></a>
                            <a href="https://www.linkedin.com/" className='linkedin'><FaLinkedinIn /></a>
                    </div>
                    <div className="div-home-right">
                        <img src={img1} alt="man" />
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default Home;
