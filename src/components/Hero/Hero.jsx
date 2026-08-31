import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 17) {
    greeting = 'Good Afternoon';
  } else if (hour < 21) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Good Night';
  }

  return (
    <section className="hero-section">
      <div className="hero-content">

        <p className="greeting">{greeting} 👋</p>

        <h1>
          I'm <span className="highlight">Shreya</span>
        </h1>

        <h2>B.Tech Computer Science Student</h2>

        <p className="tagline">
          I'm passionate about coding, problem-solving and creating
          modern, user-friendly web experiences.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Work
          </Link>

          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;