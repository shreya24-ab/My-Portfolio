import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVIGATION */}
      <header>
        <h1>🌸 Shreya</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <button
            className="dark-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>


      {/* HOME */}
      <section id="home" className="home">
        <div className="home-content">

          <div className="profile-circle">💻</div>

          <h2>Hello, I'm Shreya</h2>

          <h3>B.Tech Computer Science Engineering Student</h3>

          <p>
            Exploring technology, building creative websites,
            and developing my programming skills.
          </p>

          <a href="#projects" className="home-button">
            Discover My Work ✨
          </a>

        </div>
      </section>


      {/* ABOUT */}
      <section id="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-box">
          <p>
            Hello! I am Shreya, a Computer Science Engineering
            student at Ramaiah University of Applied Sciences
            (RUAS).
          </p>

          <p>
            I am interested in programming and web development.
            I enjoy learning new technologies, creating websites,
            and improving my problem-solving skills.
          </p>
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="alternate">
        <h2 className="section-title">
          My <span>Skills</span> & <span>Tools</span>
        </h2>

        <div className="cards">

          <div className="skill-card">
            <div className="icon">💻</div>
            <h3>C Programming</h3>
            <p>Programming & Problem Solving</p>
          </div>

          <div className="skill-card">
            <div className="icon">🐍</div>
            <h3>Python</h3>
            <p>Programming</p>
          </div>

          <div className="skill-card">
            <div className="icon">🌐</div>
            <h3>HTML</h3>
            <p>Web Page Structure</p>
          </div>

          <div className="skill-card">
            <div className="icon">🎨</div>
            <h3>CSS</h3>
            <p>Web Page Styling</p>
          </div>

          <div className="skill-card">
            <div className="icon">⚡</div>
            <h3>JavaScript</h3>
            <p>Web Interactivity</p>
          </div>

          <div className="skill-card">
            <div className="icon">⚛️</div>
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <div className="icon">🚀</div>
            <h3>GitHub</h3>
            <p>Project Hosting</p>
          </div>

        </div>
      </section>


      {/* EDUCATION */}
      <section id="education">
        <h2 className="section-title">
          My <span>Education</span>
        </h2>

        <div className="education-card">
          <h3>🎓 B.Tech - Computer Science Engineering</h3>

          <p>Ramaiah University of Applied Sciences (RUAS)</p>

          <p>Bangalore, India</p>
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="alternate">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="cards">

          <div className="project-card">
            <div className="project-icon">💻</div>

            <h3>Personal Portfolio</h3>

            <p>
              A personal portfolio website created using
              HTML, CSS, JavaScript and React to showcase
              my skills, education and projects.
            </p>
          </div>


          <div className="project-card">
            <div className="project-icon">🌐</div>

            <h3>Web Development Practice</h3>

            <p>
              Practicing HTML, CSS and JavaScript by creating
              responsive and interactive web pages.
            </p>
          </div>


          <div className="project-card">
            <div className="project-icon">🧑‍💻</div>

            <h3>C Programming Projects</h3>

            <p>
              Practicing programming concepts, problem solving,
              arrays, functions, pointers and other C programming
              fundamentals.
            </p>
          </div>

        </div>


        {/* GITHUB */}
        <div className="github-section">

          <h3>🚀 Explore My Coding Journey</h3>

          <p>
            Explore my projects, practice work and coding journey
            on GitHub.
          </p>

          <a
            href="https://github.com/shreya24-ab/SW_CSE_B2.2_Internship"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            🔗 Explore My GitHub
          </a>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="contact">

        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <div className="contact-container">

          <div className="contact-card">
            <h3>👩 Name</h3>
            <p>Shreya</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>

            <p>shreyabyali07@gmail.com</p>

            <a
              href="mailto:shreyabyali07@gmail.com"
              className="email-button"
            >
              Send Email
            </a>
          </div>

          <div className="contact-card">
            <h3>🎓 College</h3>
            <p>RUAS</p>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer>
        <p>© 2026 Shreya | Portfolio</p>
      </footer>


      {/* BACK TO TOP */}
      {showTop && (
        <button
          className="top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}

    </div>
  );
}

export default App;