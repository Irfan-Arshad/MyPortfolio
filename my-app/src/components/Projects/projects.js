import React, { useState } from 'react';
import './projects.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import InTheShadows1 from '../../assets/InTheShadows1.png';
import InTheShadows2 from '../../assets/InTheShadows2.png';
import InTheShadows3 from '../../assets/InTheShadows3.png';
import InTheShadows4 from '../../assets/InTheShadows4.png';
import InTheShadows5 from '../../assets/InTheShadows5.png';
import InTheShadows6 from '../../assets/InTheShadows6.png';

const projectData = [
  {
    title: 'HotSpots – City Discovery App',
    description:
      'A mobile app for discovering local attractions based on user interests and location.',
    features: [
      'Location-based suggestions',
      'Save & favourite spots',
      'Interactive map and filters',
    ],
    techStack: ['React Native', 'Firebase', 'Google Maps API'],
    github: 'https://github.com/yourusername/hotspots-app',
  },
  {
    title: 'In The Shadows - 3D Horror Game',
    description:
      'First-person 3D horror game featuring immersive visuals, puzzles, and AI-driven enemies.',
    features: [
      'Real-time lighting',
      'Custom enemy AI',
      'Psychological horror gameplay',
    ],
    techStack: ['Unity', 'C#', 'Blender', 'FMOD'],
    images: [
      InTheShadows1,
      InTheShadows2,
      InTheShadows3,
      InTheShadows4,
      InTheShadows5,
      InTheShadows6,
    ],
    github: 'https://github.com/yourusername/in-the-shadows',
  },
  {
    title: 'Birmingham League – Results Manager',
    description:
      'A web app for managing league results, standings, and schedules for a local sports league.',
    features: [
      'Admin dashboard',
      'Live standings',
      'Exportable reports',
    ],
    techStack: ['Python', 'Flask', 'SQLite', 'Chart.js'],
    github: 'https://github.com/yourusername/birmingham-league',
  },
  {
    title: 'Aston Animal Sanctuary – Adopt an Animal',
    description:
      'A database-driven website allowing users to view and adopt animals.',
    features: [
      'Animal listings and filtering',
      'Admin dashboard',
      'Secure adoption forms',
    ],
    techStack: ['PHP', 'Blade', 'Laravel'],
    github: 'https://github.com/yourusername/aston-sanctuary',
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const project = projectData[index];

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    setImageIndex(0);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
    setImageIndex(0);
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <section id="projectsPage">
      <div id="projects">
        <h1 className="projectTitle">Past Projects</h1>

        <div className="carousel">
          <button onClick={prev} className="carousel-btn" aria-label="Previous project">
            <ChevronLeft size={24} />
          </button>

          <div className="project-card">
            <div className="image-gallery">
              {project.images ? (
                <>
                  <img
                    src={project.images[imageIndex]}
                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                    className="project-image"
                  />

                  <div className="image-nav">
                    <button onClick={prevImage} className="image-btn" aria-label="Previous image">
                      <ChevronLeft size={18} />
                    </button>
                    <button onClick={nextImage} className="image-btn" aria-label="Next image">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}
            </div>

            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <ul>
              {project.features.map((feature, i) => (
                <li key={i}>✔️ {feature}</li>
              ))}
            </ul>

            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <button onClick={next} className="carousel-btn" aria-label="Next project">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
