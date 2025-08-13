import React from 'react'
import './sagbar.css'
import img1 from './img/image.png'
import { MdHome } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";



const Sagbar = () => {
  return (
    <div>
      <div className="sagbar">
        <div className="sagbar-min">
          <img src={img1} alt="" />
          <h4>Ibrohim</h4>
          <br />
          <div>
            <ul>
              <li><a href="#home"><MdHome /> Home</a></li>
            </ul>
            <hr />
            <br />
            <ul>
              <li><a href="#about"><MdPerson /> About</a></li>
            </ul>
            <hr />
            <br />
            <ul>
              <li><a href="#Skills"><FaListUl /> Skills</a></li>
            </ul>
            <hr />
            <br />
            <ul>
              <li><a href="#Projects"><FaBriefcase /> Projects</a></li>
            </ul>
            <hr />
            <br />
            <ul>
              <li><a href="#contact"><IoMdChatboxes /> Contact</a></li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sagbar
