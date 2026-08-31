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

            <ProjectGrid projects={visible} />

        </div>
    );
}

export default Projects;