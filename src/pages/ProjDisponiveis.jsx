import "../styles/Projetos.css"
import { Container, Modal, Form, Button } from "react-bootstrap"
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

    useEffect(() => {
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
            <Project projects={projects} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    )
}