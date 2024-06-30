/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

export function Project({ projects }) {
    const { token } = useAuth()
    const [showModal, setShowModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [reason, setReason] = useState("")

    const handleShowModal = (id) => {
        setSelectedProject(id)
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setReason("");
        setSelectedProject(null);
    };

    const handleSubmit = async () => {
        const request_body = {
            "reason": reason,
            "project": selectedProject 
        }
        console.log(request_body)
        try {
            await axios.post(`http://localhost:3000/interests`, request_body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            handleCloseModal()
        } catch (error) {
            console.error("Erro ao enviar interesse. ", error)
        }
    }

    return (
        <div className="project-container">
            {projects && projects.map(project => {
                let path = (project.status == "CONCLUDED") ? "projetos-concluidos" : "projetos-em-andamento";
                return (
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
                            <Link to={`/${path}/${project.id}`}>
                                <button type="button" className="project-card-btn">Ver mais</button>
                            </Link>
                        </footer>
                        {project.status === "APPROVED" ? 
                            <button type="button" className="project-card-btn" onClick={() => handleShowModal(project.id)}>Inscreva-se</button>
                            : 
                            <></> 
                        }
                        </section>
                </div>
            )})}

            <Modal show={showModal} onHide={handleCloseModal} className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Inscreva-se no projeto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="reason">
                            <Form.Label>Por que você deseja participar deste projeto?</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}