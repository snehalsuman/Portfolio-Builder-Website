import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioView: React.FC = () => {
  const { slug } = useParams();

  // TODO: Fetch portfolio data from API using slug
  const portfolio = {
    title: 'My Developer Portfolio',
    about: {
      bio: 'Full-stack developer with a passion for creating beautiful and functional web applications.',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      education: [
        {
          institution: 'University of Technology',
          degree: 'Bachelor of Computer Science',
          year: '2020',
        },
      ],
      experience: [
        {
          company: 'Tech Corp',
          position: 'Senior Developer',
          duration: '2020 - Present',
          description: 'Leading development of web applications using modern technologies.',
        },
      ],
    },
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform built with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com/username/ecommerce',
        liveUrl: 'https://ecommerce-demo.com',
      },
    ],
    socialLinks: {
      github: 'https://github.com/username',
      linkedin: 'https://linkedin.com/in/username',
      twitter: 'https://twitter.com/username',
      website: 'https://personal-website.com',
    },
  };

  return (
    <div className="portfolio-view">
      {/* Header Section */}
      <section className="portfolio-header">
        <h1>{portfolio.title}</h1>
        <div className="social-links">
          {portfolio.socialLinks.github && (
            <a href={portfolio.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <span className="social-icon">👨‍💻</span>
            </a>
          )}
          {portfolio.socialLinks.linkedin && (
            <a href={portfolio.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="social-icon">💼</span>
            </a>
          )}
          {portfolio.socialLinks.twitter && (
            <a href={portfolio.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <span className="social-icon">🐦</span>
            </a>
          )}
          {portfolio.socialLinks.website && (
            <a href={portfolio.socialLinks.website} target="_blank" rel="noopener noreferrer">
              <span className="social-icon">🌐</span>
            </a>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="portfolio-section">
        <h2>About Me</h2>
        <p>{portfolio.about.bio}</p>
        <div className="skills-container">
          {portfolio.about.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="portfolio-section">
        <h2>Education</h2>
        {portfolio.about.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.institution}</h3>
            <p className="secondary-text">{edu.degree}</p>
            <p className="secondary-text">{edu.year}</p>
            {index < portfolio.about.education.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="portfolio-section">
        <h2>Experience</h2>
        {portfolio.about.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.company}</h3>
            <p className="secondary-text">{exp.position}</p>
            <p className="secondary-text">{exp.duration}</p>
            <p>{exp.description}</p>
            {index < portfolio.about.experience.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="portfolio-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {portfolio.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies-container">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span className="link-icon">👨‍💻</span>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span className="link-icon">🌐</span>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioView; 