import React, { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Container, Card, Form } from "react-bootstrap"
import axios from "axios"

export default function Perfil() {
    const { user, token } = useAuth()
    const [formData, setFormData] = useState({ fullname: '', email: '', interests: [] })
    const [subjectList, setSubjectList] = useState([])
    const [newInterests, setNewInterests] = useState([])

    useEffect(() => {
        if (user) {
            setFormData({ 
                fullname: user.fullname, 
                email: user.email, 
                phone: user.phone,
                cpf: user.cpf,
                bio: user.bio,
                interests: user.subjects.map(subject => subject.subject.id) 
            });
            console.log(user)
        }
    }, [user]);


    useEffect(() => {
        async function getSubjects() {
            try {
                const response = await axios.get("http://localhost:3000/subjects", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { payload } = response.data
                setSubjectList(payload)
            } catch (error) {
                console.error("Erro ao carregar interesses. ", error)
            }
        }

        getSubjects()
    }, [user])

    const handleCheckboxChange = (subjectId) => {
        if (!formData.interests.includes(subjectId)) {
            setNewInterests([...newInterests, subjectId]);
        }

        setFormData((prevState) => {
            const newInterests = prevState.interests.includes(subjectId)
                ? prevState.interests.filter(id => id !== subjectId)
                : [...prevState.interests, subjectId];
            return { ...prevState, interests: newInterests };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/user/subjects', {
                email: formData.email,
                subjects: newInterests
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log("Dados atualizados com sucesso");
        } catch (error) {
            console.error("Erro ao atualizar perfil.", error);
        }
    };

    return (
        <>
            <Container>
                <h1>Meu perfil</h1>
                <Container>
                    <Card style={{ maxWidth: "100%" }}>
                        <Card.Body>
                            <>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <label>Nome </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="nome"
                                            value={formData.fullname}
                                            readOnly
                                        />
                                        <br />
                                    </Form.Group>
                                    <Form.Group>
                                        <label>E-mail </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            readOnly
                                        />
                                        <br />
                                    </Form.Group>
                                    <Form.Group>
                                        <label>Telefone </label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name="telefone"
                                            value={formData.phone}
                                            readOnly
                                        />
                                        <br />
                                    </Form.Group>
                                    <Form.Group>
                                        <label>CPF </label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name="cpf"
                                            value={formData.cpf}
                                            readOnly
                                        />
                                        <br />
                                    </Form.Group>
                                    <Form.Group>
                                        <label>Bio </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="bio"
                                            value={formData.bio}
                                            readOnly
                                        />
                                        <br />
                                    </Form.Group>
                                    <Form.Group style={{ paddingBottom: '12px' }}>
                                        <label>Áreas de interesse </label>
                                        {subjectList.map(subject => (
                                            <div key={subject.id}>
                                                <Form.Check>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        checked={formData.interests.includes(subject.id)}
                                                        onChange={() => handleCheckboxChange(subject.id)}
                                                    />
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