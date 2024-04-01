import React from 'react';
import Projects from '../data/Projects'; // Import JSON data

export default function Portfolio() {
  return (
    <div>
      <section id="work" className="projects">
        <div className="flex-row">
          <h2 className="section-title">Projects</h2>
        </div>

        {Projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-info">
              <div className="project-img">
                <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    className="my-2"
                    style={{ width: '100%' }}
                    alt={project.title}
                  />
                </a>
              </div>
              <div className="project-text">
                <h4>{project.title}</h4>
                <p>{project.content}</p>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}