import { useState, useEffect } from "react"
import { Container, Card } from "react-bootstrap"
import axios from "axios"
import { useAuth } from "../contexts/AuthContext"
import Select from "react-select"
import Interest from "../components/Interest"

export default function MeusProjetos() {
    const { token, user } = useAuth()
    const [projectList, setProjectList] = useState([])
    const [selectedStatus, setSelectedStatus] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const tweets_skeleton = document.querySelector(".tweets-skeleton");
        const tweet_skeleton = document.querySelector(".tweet-skeleton");
        for (let i = 0; i < 5; i++) {
            tweets_skeleton?.append(tweet_skeleton.cloneNode(true));
        }

        async function getProjects() {
            try {
                let endpoint = "http://localhost:3000/projects/"
                if (user.role === 'SUPERVISOR') {
                    endpoint += 'supervisor'
                } else if (user.role === 'STUDENT') {
                    endpoint += 'student'
                }

                const response = await axios.get(endpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { payload } = response.data
                setProjectList(payload)
                setIsLoading(false)
            } catch (error) {
                console.error("Erro ao carregar projetos. ", error)
            }
        }

        if (user && token) {
            getProjects()
        }
    }, [user, token])

    const options = [
        { value: "UNDER_ANALYSIS", label: "Em análise" },
        { value: "APPROVED", label: "Aprovado" },
        { value: "DISAPPROVED", label: "Reprovado" },
        { value: "IN_PROGRESS", label: "Em andamento" },
        { value: "CONCLUDED", label: "Concluído" }
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
            "DISAPPROVED": `http://localhost:3000/projects/${projectId}/disapprove`,
            "IN_PROGRESS": `http://localhost:3000/projects/${projectId}/start`,
            "CONCLUDED": `http://localhost:3000/projects/${projectId}/conclude`
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
            <Container style={{padding: "40px 0"}}>
                <h1>Meus projetos</h1>
                {user.role === 'SUPERVISOR' ? (
                    projectList.map(project => (
                        <div key={project.id}>
                            <Container style={{marginTop: "40px"}}>
                                <Card style={{ maxWidth: "100%", marginBottom: "15px" }}>
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text><strong>Motivação: </strong>{project.motivation}</Card.Text>
                                        <Card.Text><strong>Descrição: </strong>{project.description}</Card.Text>
                                        <Card.Text><strong>PAEG: </strong>{project.paeg}</Card.Text>
                                        <Card.Text><strong>Vagas: </strong>{project.slots}</Card.Text>
                                        <Card.Text><strong>Carga horária: </strong>{project.workload}h</Card.Text>
                                        <Card.Text><strong>Data de término: </strong>{project.endDate}</Card.Text>
                                        <Card.Text>
                                            <strong>Interessados </strong>
                                            <Interest projectId={project.id} />
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Status: </strong>
                                            {project.status === "DISAPPROVED" || project.status === "CONCLUDED" ? (
                                                <span>{options.find(option => option.value === project.status).label}</span>
                                            ) : (
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
                                            )}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                    ))
                ) : (
                    projectList.map(project => (
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
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                    ))
                )}
            </Container >
            {
                (isLoading) && 
                <div className="tweets-skeleton">
                    <div className="tweet-skeleton">
                        <div className="content-1">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="content-2">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}