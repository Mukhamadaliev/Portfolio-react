import React, { useState, useEffect } from 'react';
import { MdHome, MdPerson, MdClose, MdMenu } from "react-icons/md";
import { FaListUl, FaBriefcase } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import imgSagbar from './assets/image.png'
import 'aos/dist/aos.css';
import './sagbar.css';

const Sagbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false); // Desktopda sidebar yopiladi
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSagbar = () => {
    setIsOpen(!isOpen);
  };

  const closeSagbar = () => {
    setIsOpen(false);
  };

  // Profile rasmi (o'z rasmingiz bilan almashtiring)

  return (
    <>
      {/* Desktop Sidebar (katta ekranlarda har doim ko'rinadi) */}
      {!isMobile && (
        <div className="sagbar-desktop" data-aos="fade-right">
          <div className="sagbar-min">
            <img src={imgSagbar} alt="Profile" />
            <h4>Ibrohim.dev</h4>
            <br />

            <ul>
              <li>
                <NavLink to="/">
                  <MdHome /> Home
                </NavLink>
              </li>
            </ul>
            <hr />

            <ul>
              <li>
                <NavLink to="/about">
                  <MdPerson /> About
                </NavLink>
              </li>
            </ul>
            <hr />

            <ul>
              <li>
                <NavLink to="/skills">
                  <FaListUl /> Skills
                </NavLink>
              </li>
            </ul>
            <hr />

            <ul>
              <li>
                <NavLink to="/projects">
                  <FaBriefcase /> Projects
                </NavLink>
              </li>
            </ul>
            <hr />

            <ul>
              <li>
                <NavLink to="/contact">
                  <IoMdChatboxes /> Contact
                </NavLink>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      )}

      {/* Mobil menyu tugmasi (faqat mobilda ko'rinadi) */}
      {isMobile && (
        <button className={`sagbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleSagbar}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      )}

      {/* Mobile sidebar (faqat mobilda pastdan chiqadi) */}
      {isMobile && (
        <div className={`sagbar-mobile ${isOpen ? 'open' : ''}`}>
          <div className="sagbar-min">
            <img src={imgSagbar} alt="Profile" />
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
      )}

      {/* Overlay when mobile sidebar is open */}
      {isMobile && isOpen && <div className="sagbar-overlay" onClick={closeSagbar}></div>}
    </>
  );
};

export default Sagbar;