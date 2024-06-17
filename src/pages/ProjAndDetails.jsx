import { useParams } from "react-router-dom";
import "../styles/Projetos.css"
import { ProgressBar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjAndDetails() {
    const { id } = useParams()

    const [project, setProject] = useState(null);
    const [subjects, setSubjects] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            axios.get(`http://localhost:3000/projects/${id}`).then(result => {setProject(result.data.payload); setIsLoading(false);});
        } catch(e) {
            console.log(e)
        }

        try {
            axios.get(`http://localhost:3000/projects/${id}/subjects`).then(result => setSubjects(result.data));
            isLoading(false);
        } catch(e) {
            console.log(e);
        }
    }, [])

    return (
        <>
            <Container>

            <div className="proj-title">
                <h1 style={{ fontWeight: "bold" }}>{project?.title}</h1>
                {/* pegar valores doados de cada projeto */}
                {project?.isDonate ?
                    <div className="proj-donation">
                        <img src={project?.img} alt="" style={{ height: "350px", width: "600px" }} />
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
                    <img src={project?.img} alt="" style={{ height: "350px", width: "600px" }} />
                }
            </div>
            
            <div className="hashtags">
                {subjects?.payload.map((subject) => 
                    <div className="hashtag-item" key={subject}><span>#{subject}</span></div>
                )}
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
                
                {/* TODO: pegar nome das pessoas que preencheram vagas */}
                <div className="proj-text-item">
                    <strong>Vagas ({project?.slots})</strong>
                    <ul>
                        <li>Nome pessoa</li>
                        <li>Vaga aberta</li>
                    </ul>
                </div>

                <div className="proj-text-item">
                    <strong>Período de atividades</strong>
                    {project?.workload} horas
                </div>

                <div className="proj-text-item">
                    <strong>Carga horária</strong>
                    Lorem ipsum
                </div>
            </div>
                </Container>
        </>
    )
}