import React from "react"
import { Link } from "react-router-dom"
import { Container, Card } from "react-bootstrap"
import data from "../data/projetos.json"

export default function MeusProjetos() {
    return (
        <>
            <Container>
                <h1>Meus projetos</h1>
                {data.map(item => (
                    <div key={item.id}>
                        <Container>
                            <Link to={`/projetos-em-andamento/${item.id}`} style={{ textDecoration: "none" }}>
                                <Card style={{ maxWidth: "100%" }}>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Card.Text><strong>Responsável(is): </strong>{item.responsavel}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Container>
                    </div>
                ))}
            </Container>
        </>
    )
}