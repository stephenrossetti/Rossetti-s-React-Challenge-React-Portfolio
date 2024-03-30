import React from "react";
import resume from "../assets/images/Stephen.Rossetti.Resume.2024.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

export default function Resume() {
    return (
        <div>
            <section id="welcome-section" className="download-intro">
                <div className="flex-row">
                    <h2 className="section-title primary-border">My Resume</h2>
                </div>
                <div className="flex-row">
                    <div className="download-info">
                        <div className="download-text">
                            <a href={resume} className="download-logo" download>
                                <BsCloudDownload />
                            </a>
                            <p>
                                Below is a list of additional coding skills not noted on my resume!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-page-body" className="resume-body">
                <div className="article column1">
                    <p className="column-title">Font-End Technology</p>
                    <p className="column-text">
                        <ul>
                            <li className="logo">
                                <MdFoundation />
                            </li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>APIs</li>
                            <li>Bootstrap</li>
                            <li>GIT</li>
                        </ul>
                    </p>
                </div>
                <div className="article column2">
                    <p className="column-title">Back-End Technology</p>
                    <p className="column-text">
                        <ul>
                            <li className="logo">
                                <GrTechnology />
                            </li>
                            <li>Node.Js</li>
                            <li>Jest</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                            <li>Object-Relational Mapping(ORM)</li>
                            <li>Model-View-Controller (MVC)</li>
                        </ul>
                    </p>
                </div>
                <div className="article column3">
                    <p className="column-title">Performance Technology</p>
                    <p className="column-text">
                        <ul>
                            <li className="logo">
                                <GrDocumentPerformance />
                            </li>
                            <li>MySQL</li>
                            <li>NoSQL</li>
                            <li>Progressive Web Applications (PWA)</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                            <li>React</li>
                            <li>MERN</li>
                            <li>State</li>
                        </ul>
                    </p>
                </div>
            </section>
        </div>
    );
}