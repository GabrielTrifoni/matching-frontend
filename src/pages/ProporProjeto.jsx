import React from "react"
import { Container, Card, Form } from "react-bootstrap"

export default function ProporProjeto() {
    return (
        <>
            <Container>
                <h1>Propor um projeto</h1>
                <Container>
                    <Card style={{ maxWidth: "100%" }}>
                        <Card.Body>
                            <Card.Title>Preencha com as informações corretas</Card.Title>
                            <Card.Text>
                                <Form>
                                    <input className="form-control" placeholder="Nome do projeto"/> <br />
                                    <textarea className="form-control" placeholder="Descrição" rows={3}/> <br />
                                    <input className="form-control" placeholder="Responsável(is)"/> <br />
                                    <input className="form-control" placeholder="Vagas"/> <br />
                                    <input className="form-control" placeholder="Carga horária"/> <br />
                                    <input className="form-control" placeholder="Período de atividades"/> <br />
                                    <button type="submit" className="btn btn-primary">Enviar para avaliação</button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    )
}