import React, { useState } from "react"
import { Container, Card, Form } from "react-bootstrap"
import axios from "axios"

export default function CadastrarNoticia() {
    const [message, setMessage] = useState("")
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        attachments: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const token = localStorage.getItem('token')
            await axios.post('http://localhost:3000/news', formState, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMessage("Notícia cadastrada com sucesso!")
        } catch (error) {
            setMessage("Erro ao cadastrar notícia.")
            console.log("Erro ao cadastrar notícia. ", error)
        }
    }

    return (
        <>
            <Container>
                <h1>Cadastrar notícia</h1>
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
                                    placeholder="Título"
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
                                <input
                                    type="text"
                                    name="attachments"
                                    value={formState.attachments}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Url da imagem"
                                />
                                <br />
                                <button type="submit" className="btn btn-primary">Cadastrar</button>
                            </Form>
                            {message && <p style={{ paddingTop: "10px" }}>{message}</p>}
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    )
}