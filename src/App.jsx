import { useState, useEffect } from "react";
import "./index.css";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function App() {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">SB</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="menu-btn">☰</button>
      </nav>


      {/* HERO */}
      <section className="hero" id="home">

        <p className="greeting">
          {greeting} 👋
        </p>

        <h1>
          I'm <span>Shreya</span>
        </h1>

        <h2>B.Tech Computer Science Student</h2>

        <p className="hero-text">
          I'm passionate about coding, problem-solving and creating
          modern, user-friendly web experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work ↗
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>

      </section>


      {/* ABOUT */}
      <section className="about" id="about">

        <div className="photo-container">
          <img src="/Photo.jpeg" alt="Shreya" />
        </div>

        <div className="about-content">

          <p className="section-small">GET TO KNOW ME</p>

          <h2>About Me</h2>

          <p>
            Hi! I'm <strong>Shreya</strong>, a B.Tech Computer Science
            Engineering student and aspiring software developer based
            in India. I enjoy learning new technologies, solving
            problems and building useful web applications.
          </p>

          <div className="education">
            <h3>🎓 Education</h3>
            <p>B.Tech Computer Science Engineering</p>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section className="projects" id="projects">

        <p className="section-small">MY WORK</p>

        <h2>Featured Projects</h2>

        <p className="project-intro">
          A few projects I've built while learning and exploring
          modern web development.
        </p>

        <div className="project-grid">

          <div className="project-card">
            <h3>Portfolio Website</h3>

            <p>
              Personal developer portfolio showcasing my skills,
              projects and experience.
            </p>

            <div className="tags">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <button>View Project ↗</button>
          </div>


          <div className="project-card">
            <h3>BookMyShow Clone</h3>

            <p>
              A movie ticket booking website created while learning
              full-stack web development.
            </p>

            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <button>View Project ↗</button>
          </div>


          <div className="project-card">
            <h3>React + Spring Boot App</h3>

            <p>
              A full-stack application built using React and
              Spring Boot with REST APIs.
            </p>

            <div className="tags">
              <span>React</span>
              <span>Spring Boot</span>
              <span>REST API</span>
            </div>

            <button>View Project ↗</button>
          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact" id="contact">

        <p className="section-small">GET IN TOUCH</p>

        <h2>Contact Me</h2>

        <p>
          I'm always interested in learning, building and
          connecting with new people.
        </p>

        <a
          href="mailto:yourmail@gmail.com"
          className="btn primary"
        >
          Email Me
        </a>

      </section>


      {/* FOOTER */}
      <footer>
        <p>© 2026 Shreya. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;