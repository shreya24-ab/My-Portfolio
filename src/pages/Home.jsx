import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection/AboutSection';

function Home() {
  const featured = projectsData.filter(p => p.featured);

  return (
    <div className="home-page">

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <AboutSection />

      {/* GITHUB */}
      <section className="github-section">

        <h2>🚀 My GitHub Work</h2>

        <p>
          Explore my internship projects, practice work,
          assignments and coding activities on GitHub.
        </p>

        <a
          href="https://github.com/shreya24-ab/SW_CSE_B2.2_Internship"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          🔗 Explore My GitHub
        </a>

      </section>

      {/* FEATURED PROJECTS */}
      <section className="featured-section container">

        <h2>Featured Projects</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}
        >
          {featured.map(p => (
            <ProjectCard
              key={p.id}
              project={p}
            />
          ))}
        </div>

      </section>

    </div>
  );
}

export default Home;