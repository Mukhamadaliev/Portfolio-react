import React, { useState, useEffect } from 'react';
import './sagbar.css';
import img1 from './img/image.png';
import { MdHome, MdPerson } from "react-icons/md";
import { FaListUl, FaBriefcase, FaBars } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { IoChevronDown, IoChevronUp } from "react-icons/io5"; // ⬅️ Pastga/tepaga icon

import { NavLink } from "react-router-dom";

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

  const closeSagbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobil pastki menyu tugmasi */}
      <button className={`sagbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleSagbar}>
        {isOpen ? <IoChevronDown /> : <IoChevronUp />}
      </button>

      {/* Sidebar menyu (pastdan chiqadi) */}
      <div className={`sagbar ${isOpen ? 'open' : ''}`} data-aos="fade-right">
        <div className="sagbar-min">
          <img src={img1} alt="Profile" />
          <h4>Ibrohim.dev</h4>
          <br />

          <ul>
            <li>
              <NavLink to="/" onClick={closeSagbar}>
                <MdHome /> Home
              </NavLink>
            </li>
          </ul>
          <hr />

          <ul>
            <li>
              <NavLink to="/about" onClick={closeSagbar}>
                <MdPerson /> About
              </NavLink>
            </li>
          </ul>
          <hr />

          <ul>
            <li>
              <NavLink to="/skills" onClick={closeSagbar}>
                <FaListUl /> Skills
              </NavLink>
            </li>
          </ul>
          <hr />

          <ul>
            <li>
              <NavLink to="/projects" onClick={closeSagbar}>
                <FaBriefcase /> Projects
              </NavLink>
            </li>
          </ul>
          <hr />

          <ul>
            <li>
              <NavLink to="/contact" onClick={closeSagbar}>
                <IoMdChatboxes /> Contact
              </NavLink>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Sagbar;
