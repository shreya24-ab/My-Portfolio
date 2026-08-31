import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

function ProjectDetail() {
    const { id } = useParams();

    const project = projectsData.find(
        (p) => p.id === parseInt(id)
    );

    if (!project) {
        return <h2>Project not found!</h2>;
    }

    return (
        <div className="container">

            <Link to="/projects">
                ← Back to Projects
            </Link>

            <h1>{project.title}</h1>

            <p>{project.longDesc}</p>

            <h3>Technologies Used</h3>

            <p>
                {project.tech.join(' · ')}
            </p>

            <a href={project.liveUrl}>
                View Live Project
            </a>

            <br />

            <a href={project.githubUrl}>
                View on GitHub
            </a>

        </div>
    );
}

export default ProjectDetail;