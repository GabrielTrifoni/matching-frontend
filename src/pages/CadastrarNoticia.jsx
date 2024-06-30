import { useState } from "react";
import { Container, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function CadastrarNoticia() {
    const [message, setMessage] = useState("");
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        attachments: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', formState.title);
        formData.append('description', formState.description);
        formData.append('attachments', formState.attachments);
        
        // TODO: Fazer integração com o S3

        const fileInput = document.getElementsByName('attachments')[0];
        const file = fileInput.files[0];

        // pegar url segura do nosso servidor

        // upar a imagem diretamente no S3 Bucket

        // Post Request para nosso servidor para armazenar qualquer outro dado
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:3000/news', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
            setMessage("Notícia cadastrada com sucesso!");
        } catch (error) {
            setMessage("Erro ao cadastrar notícia.");
            console.log("Erro ao cadastrar notícia. ", error);
        }
    };

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
                                    type="file"
                                    name="attachments"
                                    onChange={handleChange}
                                    className="form-control"
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
    );
}
