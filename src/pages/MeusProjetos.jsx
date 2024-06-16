import { useState, useEffect } from "react"
import { Container, Card } from "react-bootstrap"
import axios from "axios"
import { useAuth } from "../contexts/AuthContext"
import Select from "react-select"

export default function MeusProjetos() {
    const { token, user } = useAuth()
    const [projectList, setProjectList] = useState([])
    const [selectedStatus, setSelectedStatus] = useState({})

    useEffect(() => {
        async function getProjects() {
            try {
                const response = await axios.get("http://localhost:3000/projects/supervisor", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                const { payload } = response.data
                setProjectList(payload)
            } catch (error) {
                console.error("Erro ao carregar projetos. ", error)
            }
        }

        getProjects()
    }, [user, token])

    const options = [
        { value: "UNDER_ANALYSIS", label: "Em análise" },
        { value: "APPROVED", label: "Aprovado" },
        { value: "DISAPPROVED", label: "Reprovado" }
    ]

    const handleStatusChange = (selectedOption, projectId) => {
        setSelectedStatus(prevState => ({
            ...prevState,
            [projectId]: selectedOption.value
        }));
    };

    const handleStatusUpdate = async (projectId, newStatus) => {
        const endpointMap = {
            "APPROVED": `http://localhost:3000/projects/${projectId}/approve`,
            "DISAPPROVED": `http://localhost:3000/projects/${projectId}/disapprove`
        };

        const endpoint = endpointMap[newStatus];
        if (!endpoint) return;

        try {
            await axios.patch(endpoint, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setProjectList(prevState => prevState.map(project =>
                project.id === projectId ? { ...project, status: newStatus } : project
            ));
            alert("Status atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar status. ", error);
            alert("Erro ao atualizar status.");
        }
    };

    return (
        <>
            <Container>
                <h1>Meus projetos</h1>
                {projectList.map(project => (
                    <div key={project.id}>
                        <Container>
                            <Card style={{ maxWidth: "100%" }}>
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text><strong>Motivação: </strong>{project.motivation}</Card.Text>
                                    <Card.Text><strong>Descrição: </strong>{project.description}</Card.Text>
                                    <Card.Text><strong>PAEG: </strong>{project.paeg}</Card.Text>
                                    <Card.Text><strong>Vagas: </strong>{project.slots}</Card.Text>
                                    <Card.Text><strong>Carga horária: </strong>{project.workload}h</Card.Text>
                                    <Card.Text><strong>Data de término: </strong>{project.endDate}</Card.Text>
                                    <Card.Text>
                                        <strong>Status: </strong>
                                        {project.status === "UNDER_ANALYSIS" ? (
                                            <>
                                                <Select
                                                    value={options.find(option => option.value === (selectedStatus[project.id] || project.status))}
                                                    options={options}
                                                    onChange={(selectedOption) => handleStatusChange(selectedOption, project.id)}
                                                />
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => handleStatusUpdate(project.id, selectedStatus[project.id])}
                                                    disabled={!selectedStatus[project.id] || selectedStatus[project.id] === project.status}
                                                >
                                                    Atualizar Status
                                                </button>
                                            </>
                                        ) : (
                                            <span>{options.find(option => option.value === project.status).label}</span>
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                ))}
            </Container >
        </>
    )
}