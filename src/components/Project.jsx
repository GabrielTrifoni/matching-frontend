/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function Project({ projects }) {
  return (
    <div className="project-container">
    {projects && projects.map(project => (
        <div className="project-card" key={project.id}>
            <div className="project-card-subjects">
                {project.subjects.map(({ subject }) => (
                    <span key={subject.id}>{subject.subject}</span>
                ))}
            </div>
            <section className="project-card-content">
                <div className="project-card-subjects">
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <footer className="project-card-footer">
                    <section className="project-card-metadata">
                        <span className="metadata">{project.endDate}</span>
                        <span className="metadata">{project.slots} vagas</span>
                        <span className="metadata">~ {project.workload} horas</span>
                    </section>
                    <Link to={`/projetos-em-andamento/${project.id}`}>
                        <button type="button" className="project-card-btn">Ver mais</button>  
                    </Link>
                </footer>
            </section>
        </div>
    ))}
</div>
  )
}