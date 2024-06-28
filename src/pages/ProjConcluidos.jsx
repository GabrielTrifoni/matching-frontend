import "../styles/Projetos.css"
import { Container, Pagination } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"

import { Project } from "../components/Project";

export default function ProjConcluidos() {
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
                setIsLoading(true)
                const response = await axios.get(`
                http://localhost:3000/projects?page=${currentPage}&size=1&status=concluded`)
                
                const { payload } = response.data;
                currentPage === 1 && 
                    setTotalPages(Array.from({ length: payload.totalPages }, (_v, i) => i + 1));
                setProjects(payload.items);
<<<<<<< HEAD
                setIsLoading(false);
=======
                setLoading(false);
>>>>>>> 940f4c354c9b335a98a0d03c69aa68c84eb0c9b8
            } catch (err) {
                console.log(err);
            }
        }

        fetchProjects();
    }, [currentPage])

    return (
        <>
            <Container>
                <h1 className="title">Projetos Concluídos</h1>
<<<<<<< HEAD
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
=======
            </Container>    
            {loading ? <span>Carregando...</span> : <Project projects={projects}/>}
>>>>>>> 940f4c354c9b335a98a0d03c69aa68c84eb0c9b8
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    )
}