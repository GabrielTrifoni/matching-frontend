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

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`
                    http://localhost:3000/projects?page=${currentPage}&size=5&status=in_progress`, 
                )
                
                const { payload } = response.data;
                currentPage === 1 && 
                    setTotalPages(Array.from({ length: payload.totalPages }, (_v, i) => i + 1));
                console.log(payload);
                setProjects(payload.items);
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
            <Project projects={projects}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    )
}