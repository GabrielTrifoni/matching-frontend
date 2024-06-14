import React, { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Container, Card, Form } from "react-bootstrap"
import axios from "axios"

export default function Perfil() {
    const { user } = useAuth()
    const [formData, setFormData] = useState({ fullname: '', email: '' })
    const [subjectList, setSubjectList] = useState([])

    useEffect(() => {
        if (user) {
            setFormData({ fullname: user.fullname, email: user.email });
        }
    }, [user]);

    useEffect(() => {
        async function getSubjects() {
            try {
                const response = await axios.get("http://localhost:3000/subjects")
                const { payload } = response.data
                setSubjectList(payload)
            } catch (error) {
                console.error("Erro ao carregar interesses. ", error)
            }
        }

        getSubjects()
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <Container>
                <h1>Meu perfil</h1>
                <Container>
                    <Card style={{ maxWidth: "100%" }}>
                        <Card.Body>
                            <>
                                <Form>
                                    <Form.Group>
                                        <label>Nome </label>
                                        <input className="form-control" type="text" name="nome" value={formData.fullname} onChange={handleChange} /> <br />
                                    </Form.Group>
                                    <Form.Group>
                                        <label>E-mail </label>
                                        <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} /> <br />
                                    </Form.Group>
                                    <Form.Group style={{ height: '86px' }}>
                                        <label>Curso </label>
                                        <select className="form-control">
                                            <option>Selecione seu curso...</option>
                                            <option>Ciências da computação</option>
                                            <option>Engenharia ambiental</option>
                                            <option>Física</option>
                                            <option>Geografia</option>
                                            <option>Geologia</option>
                                            <option>Matemática</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group style={{ paddingBottom: '12px' }}>
                                        <label>Áreas de interesse </label>
                                        {subjectList.map(subject => (
                                            <div key={subject.id}>
                                                <Form.Check>
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label">{subject.subject}</label>
                                                </Form.Check>
                                            </div>
                                        ))}
                                    </Form.Group>
                                    <button type="submit" className="btn btn-primary">Salvar</button>
                                </Form>
                            </>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    )
}