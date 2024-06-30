import React, { useState, useEffect } from "react"
import { Container, Card, Form } from "react-bootstrap"
import axios from "axios"
import { useAuth } from "../contexts/AuthContext"

export default function ProporProjeto() {
    const [formState, setFormState] = useState({
        title: "",
        motivation: "",
        description: "",
        paeg: "",
        attachment: null,
        slots: "",
        workload: "",
        endDate: "",
        supervisor: "",
        subjects: []
    })

    const [subjectList, setSubjectList] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const [message, setMessage] = useState("")
    const { token } = useAuth()

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: type === "number" ? (value === "" ? "" : parseFloat(value)) : value
        }));
    };

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await axios.get("http://localhost:3000/subjects", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { payload } = response.data
                setSubjectList(payload)
            } catch (error) {
                console.error("Erro ao buscar assuntos. ", error)
            }
        }

        fetchSubjects()
    }, [])

    const handleSubjectChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedSubjects([...selectedSubjects, value]);
        } else {
            setSelectedSubjects(selectedSubjects.filter(subject => subject !== value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        formState.subjects = selectedSubjects
        console.log(formState)
        console.log(selectedSubjects)
        try {
            const token = localStorage.getItem("token")
            await axios.post("http://localhost:3000/projects", formState, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMessage("Projeto enviado para avaliação")
        } catch (error) {
            console.error("Erro ao enviar projeto. ", error)
            setMessage("Erro ao enviar projeto")
        }
    } 

    return (
        <>
            <Container>
                <h1>Propor um projeto</h1>
                <Container>
                    <Card style={{ maxWidth: "100%" }}>
                        <Card.Body>
                            <Card.Title>Preencha com as informações corretas</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="title"
                                    value={formState.title}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Título do projeto"
                                />
                                <br />
                                <textarea
                                    type="text"
                                    name="motivation"
                                    value={formState.motivation}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Motivação"
                                />
                                <br />
                                <textarea
                                    type="text"
                                    name="description"
                                    value={formState.description}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Descrição"
                                    rows={3}
                                />
                                <br />
                                <textarea
                                    type="text"
                                    name="paeg"
                                    value={formState.paeg}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="PAEG"
                                    rows={3}
                                />
                                <br />
                                <input
                                    type="number"
                                    name="slots"
                                    value={formState.slots}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Número de vagas"
                                />
                                <br />
                                <input
                                    type="number"
                                    name="workload"
                                    value={formState.workload}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Carga horária"
                                />
                                <br />
                                <label className="form-label">Data de término</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formState.endDate}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Data de término"
                                />
                                <br />
                                <label htmlFor="subjectList" className="form-label">Assuntos</label>
                                {subjectList.map(subject => (
                                    <div key={subject.id}>
                                        <input
                                            key={subject.id}
                                            type="checkbox"
                                            value={subject.id}
                                            onChange={handleSubjectChange}
                                        />
                                        <label className="form-label">{subject.subject}</label>
                                    </div>
                                ))}
                                <br />
                                <input
                                    type="text"
                                    name="supervisor"
                                    value={formState.supervisor}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="E-mail do orientador"
                                />
                                <br />
                                <input
                                    type="text"
                                    name="attachments"
                                    value={formState.attachments}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Url da imagem"
                                />
                                <br />
                                <button type="submit" className="btn btn-primary">Enviar para avaliação</button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    )
}