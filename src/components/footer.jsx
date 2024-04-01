// Import React as well as icons that can be clicked to link to my websites //
import React from "react";
// Obtained from React icons website //
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

// Standard footer to use on page with applicable links //
// Add icon components //
export default function Footer() {
  return (
    <footer>
      <h2>Made by Stephen Rossetti</h2>
        <ul>
          <a href="https://github.com/stephenrossetti">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/stephen-rossetti-he-him-his-cpa-9bba0582/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/stevierossetti/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
    </footer>
  );
}
