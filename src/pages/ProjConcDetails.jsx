import { useParams } from "react-router-dom";
import "../styles/Projetos.css"
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export default function ProjConcDetails() {
    const { id } = useParams()

    const { token } = useAuth()

    const [project, setProject] = useState(null);
    const [subjects, setSubjects] = useState(null);
    const [members, setMembers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activityPeriod, setActivityPeriod] = useState('');

    useEffect(() => {
        async function handleLoadItems() {
            try {
                axios.get(`http://localhost:3000/projects/${id}`).then(result => {
                    setProject(result.data.payload);
                });
                axios.get(`http://localhost:3000/projects/${id}/subjects`).then(result => setSubjects(result.data.payload));
                axios.get(`http://localhost:3000/interests/project/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(result => {setMembers(result.data.payload); setIsLoading(false);})
            } catch(e) {
                console.log(e);
            }
        }

        handleLoadItems();
    }, [ id, token ])

    useEffect(() => {
        if(project) {
            const startDate = new Date(project.startDate);
            const endDate = new Date(project.endDate);
            const formattedStartDate = new Intl.DateTimeFormat('pt-BR').format(startDate);
            const formattedEndDate = new Intl.DateTimeFormat('pt-BR').format(endDate);
            setActivityPeriod(formattedStartDate + ` - ` + formattedEndDate)
        }
    }, [project])

    return (
        <>
            <Container>
                <div className="proj-title">
                    <h1 style={{ fontWeight: "bold" }}>{project?.title}</h1>
                    <img alt="" style={{ height: "350px", width: "600px" }} />
                </div>
                <div className="hashtags">
                    {(!isLoading) && subjects?.map((subject) => 
                        <div className="hashtag-item" key={subject}><span>#{subject}</span></div>
                    )}

                    {(!isLoading && !subjects?.length) && "Não há itens relacionados a este projeto no momento."}
                </div>
                <div className="proj-text">
                <div className="proj-text-item">
                    <strong>Descrição e objetivos</strong>
                    {project?.description}
                </div>

                <div className="proj-text-item">
                    <strong>Responsável(is)</strong>
                    {project?.supervisor.fullname}
                </div>
                
                <div className="proj-text-item">
                    <strong>Vagas ({project?.slots})</strong>
                    <ul>
                        {
                            (!isLoading) &&
                            members?.map(member => {
                                return (
                                    <li key={member.user.id}>{member.user.fullname}</li>
                                )
                            })
                        }
                        {
                            (project && members) && [...Array(project?.slots - members?.length)].map((_, index) => (
                                <li key={index}>Vaga aberta</li>
                            ))
                        }
                    </ul>
                </div>

                <div className="proj-text-item">
                    <strong>Período de atividades</strong>
                    {activityPeriod}
                </div>

                <div className="proj-text-item">
                    <strong>Carga horária</strong>
                    {project?.workload} horas
                </div>
            </div>

            </Container>
        </>
    )
}