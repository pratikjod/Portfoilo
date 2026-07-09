function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hi, I'm Pratik Gore</h1>
        <h3>Full Stack Developer</h3>
        <p>
          I build responsive web applications using React, Node.js and MongoDB.
        </p>

        <a href="#projects">View Projects</a>
        <a href="/resume/Pratik_Gore_Resume.pdf" download>
          Download Resume
        </a>
      </div>

      <div className="hero-right">
        <img src="/images/profile/pratik-logo.png" alt="Pratik Gore" />
      </div>
    </section>
  );
}

export default Hero;