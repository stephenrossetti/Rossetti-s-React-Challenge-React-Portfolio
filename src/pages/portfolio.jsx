import React from 'react';
import Projects from '../data/Projects';
import Project from '../components/project';
import p1 from '../assets/images/p1Techblog.jpg';
import p2 from '../assets/images/p2PWA.jpg';
import p3 from '../assets/images/p3EmployeeTracker.jpg';
import p4 from '../assets/images/p4NoteTracker.jpg';
import p5 from '../assets/images/p5WeatherApp.jpg';
import p6 from '../assets/images/p6PetTreatInformer.jpg';
import p7 from '../assets/images/p7ConventionPlanner.jpg';

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

p1,p2,p3,p4,p5,p6,p7