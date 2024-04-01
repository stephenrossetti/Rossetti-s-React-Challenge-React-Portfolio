import React from "react";
import resume from "../assets/images/Stephen.Rossetti.Resume.2024.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";

export default function ResumePage() {
    return (
        <div>
            <section id="resume-section" className="download-intro">
                <div className="flex-row">
                    <h2 className="section-title">My Resume</h2>
                </div>
                <div className="flex-row">
                    <div className="download-info">
                        <div className="download-text">
                            <a href={resume} className="download-logo" download>
                                <BsCloudDownload />
                            </a>
                            <p>
                                Please see a list of additional coding skills below!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-page-body" className="resume-body">
                <div className="article column1">
                    <p className="column-title">Font-End Technology</p>
                    <div className="column-text">
                        <ul>
                            <li className="logos">
                                <FaComputer />
                            </li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>APIs</li>
                            <li>Bootstrap</li>
                            <li>GIT</li>
                        </ul>
                    </div>
                </div>
                <div className="article column2">
                    <p className="column-title">Back-End Technology</p>
                    <div className="column-text">
                        <ul>
                            <li className="logos">
                                <FaRegFileCode />
                            </li>
                            <li>Node.Js</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                            <li>Object-Oriented Programming (OOP)</li>
                            <li>Object-Relational Mapping(ORM)</li>
                            <li>Model-View-Controller (MVC)</li>
                        </ul>
                    </div>
                </div>
                <div className="article column3">
                    <p className="column-title">Performance Technology</p>
                    <div className="column-text">
                        <ul>
                            <li className="logos">
                                <GrDocumentPerformance />
                            </li>
                            <li>NoSQL</li>
                            <li>Progressive Web Applications (PWA)</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                            <li>React</li>
                            <li>MERN</li>
                            <li>State</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}