import ProjectCard from "./ProjectCard";

const projects = [
  {
    type: "Full Stack Web Application",
    title: "Fruit Juice Billing Website",
    description:
      "A billing website for fruit juice shop with cart, customer details, billing generation, WhatsApp invoice sharing and billing history.",
    image: "/images/projects/fruit-juice-billing.png",
    alt: "Fruit Juice Billing Website",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/pratikjod/Githubtutte",
    liveDemo:
      "https://githubtutte-p4jt3rnw4-fruit-juice-billing-app.vercel.app/#/login",
  },
  {
    type: "Health Calculator Web App",
    title: "BMI Calculator",
    description:
      "A BMI Calculator web application that calculates Body Mass Index using height and weight, then displays BMI value with health category.",
    image: "/images/projects/bmi-calculator.png",
    alt: "BMI Calculator",
    tech: ["Node.js", "Express.js", "EJS", "CSS"],
    github: "https://github.com/pratikjod/BMIClaculeter",
    liveDemo: "https://bmiclaculeter.onrender.com",
  },
  {
    type: "API Based Web Application",
    title: "Weather Website",
    description:
      "A responsive weather website that allows users to search city names and view live weather information using a weather API.",
    image: "/images/projects/weather-app.png",
    alt: "Weather Website",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    github: "https://github.com/pratikjod/Wetherweb",
    liveDemo: "https://weatherapp-9fiq.onrender.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <span>PORTFOLIO</span>
        <h2>Projects</h2>
        <p>Here are my web development projects with source code and live demo.</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;