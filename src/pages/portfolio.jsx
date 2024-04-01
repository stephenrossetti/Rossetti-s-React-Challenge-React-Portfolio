import React from 'react';
import Projects from '../data/Projects'; // Import JSON data
import Project from '../components/project'; // Import JSON data

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