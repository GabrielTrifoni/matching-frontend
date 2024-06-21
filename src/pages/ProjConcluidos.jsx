import "../styles/Projetos.css"
import { Container, Pagination } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"

import { Project } from "../components/Project";

export default function ProjConcluidos() {
    const [projects, setProjects] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`
                http://localhost:3000/projects?page=${currentPage}&size=3&status=concluded`)
                
                const { payload } = response.data;
                currentPage === 1 && 
                    setTotalPages(Array.from({ length: payload.totalPages }, (_v, i) => i + 1));
                setProjects(payload.items);
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
            </Container>    
            <Project projects={projects}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    )
}