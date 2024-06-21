import "../styles/Projetos.css"
import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "../contexts/AuthContext"
import { Pagination } from "../components/Pagination"
import { Project } from "../components/Project"

export default function ProjDisponiveis() {
    const { token } = useAuth();
    const [projects, setProjects] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const tweets_skeleton = document.querySelector(".tweets-skeleton");
        const tweet_skeleton = document.querySelector(".tweet-skeleton");
        for (let i = 0; i < 5; i++) {
            tweets_skeleton?.append(tweet_skeleton.cloneNode(true));
        }

        const fetchProjects = async () => {
            try {
                const response = await axios.get(`
                http://localhost:3000/projects/byUser?page=${currentPage}&size=1&status=approved&slots=with_slot`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                const { payload } = response.data;
                currentPage === 1 &&
                    setTotalPages(Array.from({ length: payload.totalPages }, (_v, i) => i + 1));
                setProjects(payload.items);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        fetchProjects();
    }, [token, currentPage])

    return (
        <>
            <Container>
                <h1 className="title">Projetos Disponíveis</h1>
            </Container>
            {
                (!isLoading) &&
                <Project projects={projects}/>
            }

            {
                (isLoading) && 
                // <div id="content-container">Carregando...</div>
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
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    )
}