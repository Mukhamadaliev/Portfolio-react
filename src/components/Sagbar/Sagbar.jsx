import React, { useState, useEffect } from 'react';
import './sagbar.css';
import img1 from './img/image.png';
import { MdHome, MdPerson } from "react-icons/md";
import { FaListUl, FaBriefcase, FaBars } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Sagbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleSagbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobil versiya tugmasi */}
      <div className={`sagbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleSagbar}>
        {isOpen ? <IoCloseSharp /> : <FaBars />}
      </div>

      {/* Sidebar menyu */}
      <div className={`sagbar ${isOpen ? 'open' : ''}`} data-aos="fade-right">
        <div className="sagbar-min" data-aos="fade-right">
          <img src={img1} alt="Profile" />
          <h4>Ibrohim</h4>
          <br />
          <ul>
            <li><a href="#home"><MdHome /> Home</a></li>
          </ul>
          <hr />
          <ul>
            <li><a href="#about"><MdPerson /> About</a></li>
          </ul>
          <hr />
          <ul>
            <li><a href="#Skills"><FaListUl /> Skills</a></li>
          </ul>
          <hr />
          <ul>
            <li><a href="#Projects"><FaBriefcase /> Projects</a></li>
          </ul>
          <hr />
          <ul>
            <li><a href="#contact"><IoMdChatboxes /> Contact</a></li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Sagbar;
