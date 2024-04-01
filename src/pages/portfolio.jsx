// Import JSON data from Projects to map through the information and add to the page instead of manually typing each in //
// Import the Project component as a sort of card to display over and over again on portfolio page //
import React from 'react';
import Projects from '../data/Projects';
import Project from '../components/project';

export default function Portfolio() {
  return (
    <div>
      <section id="work" className="projects">
        <div className="flex-row">
          <h2 className="section-title">Projects</h2>
        </div>
        {Projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </section>
    </div>
  );
}