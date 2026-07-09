function About() {
  return (
    <section id="about" className="section featured-section">
      <div className="section-heading">
        <span className="section-label">MY WORK</span>
        <h2>Featured Projects</h2>
        <p>
          Here are some of my key web development projects that demonstrate
          my frontend, backend, API integration, and database skills.
        </p>
      </div>

      <div className="featured-projects">
        <div className="featured-card">
          <div className="featured-number">01</div>

          <div className="featured-content">
            <h3>Weather Website</h3>

            <p>
              I developed a responsive Weather Website that allows users to
              search for any city and view current weather information in a
              simple and user-friendly interface.
            </p>

            <p>
              The website displays useful weather details such as temperature,
              weather conditions, humidity, and wind speed using real-time
              weather data from an external API.
            </p>

            <p>
              This project helped me improve my skills in API integration,
              JavaScript, asynchronous data fetching, responsive design, and
              handling dynamic user input.
            </p>

            <div className="featured-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Weather API</span>
            </div>
          </div>
        </div>

        <div className="featured-card">
          <div className="featured-number">02</div>

          <div className="featured-content">
            <h3>BMI Calculator</h3>

            <p>
              I developed a BMI Calculator web application that calculates
              Body Mass Index based on the user's height and weight information.
            </p>

            <p>
              The application displays the calculated BMI value along with
              health categories such as Underweight, Normal Weight, Overweight,
              and Obese using a clear and dynamic result interface.
            </p>

            <p>
              This project demonstrates my understanding of backend routing,
              form handling, server-side rendering, calculation logic, and
              dynamic UI updates based on user results.
            </p>

            <div className="featured-tech">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>EJS</span>
              <span>CSS</span>
            </div>
          </div>
        </div>

        <div className="featured-card">
          <div className="featured-number">03</div>

          <div className="featured-content">
            <h3>Fruit Juice Billing Website</h3>

            <p>
              I developed a full-stack Fruit Juice Billing Website designed
              to simplify billing operations for a fruit juice shop with a
              modern and responsive user interface.
            </p>

            <p>
              The application includes product categories, cart management,
              quantity controls, customer details, automatic total calculation,
              billing generation, and WhatsApp invoice sharing.
            </p>

            <p>
              The project also includes MongoDB bill storage and billing history,
              demonstrating my practical knowledge of React frontend development,
              Node.js backend APIs, Express.js, database integration, and
              full-stack application development.
            </p>

            <div className="featured-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;