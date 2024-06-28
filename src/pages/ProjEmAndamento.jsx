import "../styles/Projetos.css"
import { Container } from "react-bootstrap"
import { Project } from "../components/Project"
import { Pagination } from "../components/Pagination"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProjEmAndamento() {
    const [projects, setProjects] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const tweets_skeleton = document.querySelector(".tweets-skeleton");
        const tweet_skeleton = document.querySelector(".tweet-skeleton");
        for (let i = 0; i < 5; i++) {
            tweets_skeleton?.append(tweet_skeleton.cloneNode(true));
        }

        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`
                    http://localhost:3000/projects?page=${currentPage}&size=1&status=in_progress`, 
                )
                
                const { payload } = response.data;
                currentPage === 1 && 
                    setTotalPages(Array.from({ length: payload.totalPages }, (_v, i) => i + 1));
                setProjects(payload.items);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        fetchProjects();
    }, [currentPage])

    useEffect(() => {
        console.log(projects);
    }, [projects])


    return (
        <>
            <Container>
                <h1 className="title">Projetos em andamento</h1>
            </Container>    
            {loading ? <div className="loading"><span>Carregando...</span></div> : <Project projects={projects}/>}
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    )
}