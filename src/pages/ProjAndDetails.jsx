import { useParams } from "react-router-dom";
import "../styles/Projetos.css"
import { ProgressBar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export default function ProjAndDetails() {
    const { id } = useParams()

    const { token } = useAuth();

    const [project, setProject] = useState(null);
    const [subjects, setSubjects] = useState(null);
    const [members, setMembers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activityPeriod, setActivityPeriod] = useState(null);
    

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
                setIsLoading(false);
                console.log(e);
            }
        }

        handleLoadItems();
    }, [ id, token ]);

    useEffect(() => {
        if(project) {
            const startDate = new Date(project.startDate);
            const endDate = new Date(project.endDate);
            const formattedStartDate = new Intl.DateTimeFormat('pt-BR').format(startDate);
            const formattedEndDate = new Intl.DateTimeFormat('pt-BR').format(endDate);
            setActivityPeriod(formattedStartDate + ` - ` + formattedEndDate)
        }
    }, [ project ]);

    console.log(project?.attachment.url)

    return (
        <>
            <Container>

            <div className="proj-title">
                <h1 style={{ fontWeight: "bold", margin: "40px 0"  }}>{project?.title}</h1>
                {project?.isDonate ?
                    <div className="proj-donation">
                        <img src={project && project.attachment.url} alt="" style={{ height: "350px", width: "600px" }} />
                        <div className="proj-donation-descr">
                            <h2>Faça uma doação!</h2>
                            Lorem ipsum dolor sit amet. Aut iure aliquid eos quis distinctio est tempore nostrum ut sint
                            alias. Ut laborum blanditiis est perferendis neque ut alias laboriosam. Non dolorem saepe ut
                            harum omnis et esse doloribus aut dolorem dolor et aliquam tempora.
                            <div className="donation">
                                <h4><strong>R${project?.valorDoado.toFixed(2)} doados</strong></h4>
                                <ProgressBar variant="success" now={project?.valorDoado} max={project?.valorEsperado} />
                                <button className="donation-button">
                                    <Link to={`/doacao/${project?.id}`}
                                        style={{ textDecoration: "none", color: "black", fontSize: "14px", padding: "0 9px" }}>
                                        Doar
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <img src={project?.attachment.url} alt="" style={{ height: "350px", width: "600px" }} />
                }
            </div>
            {

            }
            <div className="hashtags">
                {(!isLoading && subjects) && subjects.map((subject) => 
                    <div className="hashtag-item" key={subject}><span>#{subject}</span></div>
                )}

                {(!isLoading && subjects && !subjects.length) && <span style={{width: "100%",textAlign: "center"}}>Não há itens relacionados a este projeto no momento.</span>}
            </div>
            <div className="proj-text" style={{marginBottom: "60px"}}>
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
                    {(!isLoading && token === null) && "Necessário estar logado para visualizar mais detalhes."}
                    <ul>
                    {
                            (!isLoading && members) &&
                            members.map(member => {
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
                    {project && activityPeriod}
                    
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