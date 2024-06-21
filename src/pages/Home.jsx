import ImageCarousel from "../components/ImageCarousel"
import { Container } from "react-bootstrap"
import "../styles/Home.css"
import randImg1 from "../images/rand-img1.png"
import randImg2 from "../images/rand-img2.png"
import { Link } from "react-router-dom"
import { useEffect, useState, useTransition } from "react"
import axios from "axios"

export function Home() {
    const [approvedProjects, setApprovedProjects] = useState(null);
    const [inProgressProjects, setInProgressProjects] = useState(null);
    const [concludedProjects, setConcludedProjects] = useState(null);
    const [news, setNews] = useState(null);
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        handleLoadProjects();
    }, [])

    function handleLoadProjects() {
        startTransition(async () => {
            try {
                // In progress Projects
                axios.get(`http://localhost:3000/projects?page=1&size=5&status=approved`)
                .then(response => setApprovedProjects(response.data.payload.items))

                // In progress Projects
                axios.get(`http://localhost:3000/projects?page=1&size=5&status=in_progress`)
                .then(response => setInProgressProjects(response.data.payload.items))

                // Concluded Projects
                axios.get(`http://localhost:3000/projects?page=1&size=5&status=concluded`)
                .then(response => setConcludedProjects(response.data.payload.items))

                // News
                axios.get(`http://localhost:3000/news?page=1&size=2`)
                .then(response => setNews(response.data.payload.items))
            } catch (err) {
                console.log(err);
            }
        })
    }
    
    return (
        <>
            <ImageCarousel />
            <Container>
                <div className="extensao">
                    <div className="line">
                        <span><strong>Extensão</strong></span>
                    </div>
                    <div className="line-text">
                        <span>
                        A extensão universitária da UNESP é uma ponte vital entre a academia e a comunidade, promovendo a troca de conhecimento 
                        e experiências. Esses projetos envolvem alunos, professores e a sociedade em atividades que visam o desenvolvimento social, 
                        cultural e econômico. Por meio de parcerias e ações práticas, a extensão fortalece o compromisso social da universidade, 
                        contribui para a formação cidadã dos estudantes e oferece soluções inovadoras para os desafios locais e regionais. 
                        Na UNESP, a extensão é uma ferramenta poderosa para transformar e enriquecer a realidade ao nosso redor.
                        </span>
                    </div>
                    <button className="card-button">
                        <Link to="/extensao"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </div>
            </Container>
            <div className="projetos-disponiveis">
                <Container>
                    <div className="line">
                        <span style={{ backgroundColor: "#009FE0" }}><strong>Projetos Disponíveis</strong></span>
                    </div>
                    { (!isPending && approvedProjects) &&
                        <div className="projetos">
                            <div className="main-project">
                                <img src={randImg1} alt="" />
                                <span><strong>{approvedProjects[0].title}</strong></span>
                                <span>{approvedProjects[0].description}</span>
                            </div>
                            <div className="container2">
                                <div className="projetos-grid">
                                    <div className="side-projects">
                                        {
                                            approvedProjects[1] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{approvedProjects[1].title}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <div className="side-projects">
                                        {
                                            approvedProjects[2] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{approvedProjects[2].title}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <div className="side-projects">
                                        {
                                            approvedProjects[3] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{approvedProjects[3].title}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <div className="side-projects">
                                        {
                                            approvedProjects[4] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{approvedProjects[4].title}</strong></span>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <button className="card-button">
                        <Link to="/projetos-disponiveis"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </Container>
            </div>
            <div className="projetos-em-andamento">
                <Container>
                    <div className="line">
                        <span><strong>Projetos Em Andamento</strong></span>
                    </div>
                    { (!isPending && inProgressProjects) &&
                        <div className="projetos">
                            <div className="main-project">
                                <img src={randImg1} alt="" />
                                <span><strong>{inProgressProjects[0].title}</strong></span>
                                <span>{inProgressProjects[0].description}</span>
                            </div>
                            <div className="container2">
                                <div className="projetos-grid">
                                    <div className="side-projects">
                                        {
                                            inProgressProjects[1] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{inProgressProjects[1].title}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <div className="side-projects">
                                        {
                                            inProgressProjects[2] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{inProgressProjects[2].title}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <div className="side-projects">
                                        {
                                            inProgressProjects[3] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{inProgressProjects[3].title}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <div className="side-projects">
                                        {
                                            inProgressProjects[4] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{inProgressProjects[4].title}</strong></span>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <button className="card-button">
                        <Link to="/projetos-em-andamento"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </Container>
            </div>
            <div className="projetos-concluidos">
                <Container>
                    <div className="line">
                        <span style={{ backgroundColor: "#009FE0" }}><strong>Projetos Concluídos</strong></span>
                    </div>
                    { (!isPending && concludedProjects) &&
                        <div className="projetos">
                            <div className="main-project">
                                <img src={randImg1} alt="" />
                                <span><strong>{concludedProjects[0].title}</strong></span>
                                <span>{concludedProjects[0].description}</span>
                            </div>
                            <div className="container1">
                                <div className="projetos-grid">
                                    <div className="side-projects">
                                        {
                                            concludedProjects[1] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{concludedProjects[1].title}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <div className="side-projects">
                                        {
                                            concludedProjects[2] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{concludedProjects[2].title}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <div className="side-projects">
                                        {
                                            concludedProjects[3] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{concludedProjects[3].title}</strong></span>
                                            </>
                                        }
                                    </div>

                                    <div className="side-projects">
                                        {
                                            concludedProjects[4] &&
                                            <>
                                                <img src={randImg2} alt="" />
                                                <span><strong>{concludedProjects[4].title}</strong></span>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <button className="card-button">
                        <Link to="/projetos-concluidos"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </Container>
            </div>
            <Container>
                <div className="latest-news">
                    <div className="line">
                        <span><strong>Últimas Divulgações</strong></span>
                    </div>
                    <div className="container-news">
                        {
                            (!isPending && news) &&
                            <>                            
                                {
                                    news[0] &&
                                    <div className="news">
                                        <img src={randImg1} alt="" />
                                        <span><strong>{news[0].title}</strong></span><br />
                                        <span>{news[0].description}</span>
                                    </div>
                                }

                                {
                                    news[1] &&
                                    <div className="news">
                                        <img src={randImg1} alt="" />
                                        <span><strong>{news[1].title}</strong></span><br />
                                        <span>{news[1].description}</span>
                                    </div>
                                }
                            </>
                        }
                    </div>
                    <button className="card-button">
                        <Link to="/noticias"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </div>
            </Container>
        </>
    )
}