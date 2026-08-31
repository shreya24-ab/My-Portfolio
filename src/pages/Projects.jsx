import { useState } from 'react';
import { projectsData, categories } from '../data/projects';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const visible =
        activeFilter === 'all'
            ? projectsData
            : projectsData.filter(
                (project) => project.category === activeFilter
            );

    return (
        <div className="projects-page container">

            <div className="projects-header">
                <h1>My Projects</h1>

                <div className="project-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={
                                category === activeFilter
                                    ? 'filter-btn active'
                                    : 'filter-btn'
                            }
                            onClick={() => setActiveFilter(category)}
                        >
                            {category.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* MY PROJECTS */}
            <ProjectGrid projects={visible} />

            {/* GITHUB */}
            <div className="github-section">

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

            </div>

        </div>
    );
}

export default Projects;