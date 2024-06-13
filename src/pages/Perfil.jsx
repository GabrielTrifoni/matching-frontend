import React, { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Container, Card, Form } from "react-bootstrap"

export default function Perfil() {
    const { user, updateUser } = useUser()
    const [formData, setFormData] = useState({ nome: '', email: '' })

    useEffect(() => {
        if (user) {
            setFormData({ nome: user.nome, email: user.email });
        }
    }, [user]);


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
                            <Card.Text>
                                <Form>
                                    <Form.Group>
                                        <label>Nome </label>
                                        <input className="form-control" type="text" name="nome" value={formData.nome} onChange={handleChange} /> <br />
                                    </Form.Group>
                                    <Form.Group>
                                        <label>E-mail </label>
                                        <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} /> <br />
                                    </Form.Group>
                                    <Form.Group style={{height: '86px'}}>
                                        <label>Curso </label>
                                        <select className="form-control">
                                            <option selected>Selecione seu curso...</option>
                                            <option>Ciências da computação</option>
                                            <option>Engenharia ambiental</option>
                                            <option>Física</option>
                                            <option>Geografia</option>
                                            <option>Geologia</option>
                                            <option>Matemática</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group style={{paddingBottom: '12px'}}>
                                        <label>Áreas de interesse </label>
                                        <Form.Check>
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label"> Desenvolvimento mobile</label>
                                        </Form.Check>
                                        <Form.Check>
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label"> Desenvolvimento web</label>
                                        </Form.Check>
                                        <Form.Check>
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label"> Design</label>
                                        </Form.Check>
                                        <Form.Check>
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label"> Análise de dados</label>
                                        </Form.Check>
                                    </Form.Group>
                                    <button type="submit" className="btn btn-primary">Salvar</button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    )
}