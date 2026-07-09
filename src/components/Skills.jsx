function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="skills-heading">
        <span className="skills-label">MY EXPERTISE</span>
        <h2>Technical Skills</h2>
        <p>
          Technologies and tools I use to build responsive, modern,
          and full-stack web applications.
        </p>
      </div>

      <div className="skills-container">
        <div className="skill-category">
          <h3>💻 Programming Languages</h3>
          <div className="skill-items">
            <span>Java</span>
            <span>JavaScript</span>
            <span>PL/SQL</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>🎨 Frontend Technologies</h3>
          <div className="skill-items">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>⚙️ Frameworks & Libraries</h3>
          <div className="skill-items">
            <span>Angular</span>
            <span>React</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>🗄️ Databases</h3>
          <div className="skill-items">
            <span>MongoDB</span>
            <span>SQL</span>
            <span>PL/SQL</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>🛠️ Tools & APIs</h3>
          <div className="skill-items">
            <span>GitHub</span>
            <span>REST API</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;