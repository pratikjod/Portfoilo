function ProjectCard({ project }) {
  return (
    <div className="professional-project-card">
      <div className="project-img-box">
        <img src={project.image} alt={project.alt} />
      </div>

      <div className="project-info">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>

        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub Code
          </a>

          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;