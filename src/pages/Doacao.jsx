import React from "react"
import { useParams } from "react-router-dom"
import data from "../data/projetos.json"
import "../styles/Doacao.css"
import { Container } from "react-bootstrap"

export default function Doacao() {
    const { id } = useParams()
    const item = data.find(item => item.id === parseInt(id));

    return (
        <>
            <Container>
                {item.isDonate ?
                    <div className="donation-container">
                        <h1>Faça uma doação!</h1>
                        <div className="donation-main">
                            <div className="donation-proj">
                                <h4>{item.title}</h4>
                                Lorem ipsum dolor sit amet. Qui minus facilis aut explicabo omnis et fugiat laboriosam
                                sit maiores fugit? Ut blanditiis error At cumque nobis est ipsum ducimus hic minus rerum
                                eos internos sunt. Ut laborum autem vel numquam voluptas ut aliquam cupiditate vel
                                perferendis dolores. Ex voluptas praesentium sed reprehenderit dicta sed sint galisum.
                                Qui voluptate voluptas quo dolorem incidunt ex repellat neque qui aspernatur ducimus est
                                totam tenetur aut nisi ipsa! Aut modi culpa ut officia pariatur qui consectetur deleniti
                                ea deserunt voluptate. Ut harum esse in atque eaque sit amet assumenda eum sint debitis.
                                Aut nobis sunt ea dolorum eligendi et.
                            </div>
                            <div className="donation-card">
                                <div className="input-container">
                                    <input id="name" className="input" type="text" placeholder=" " />
                                    <label for="name" className="placeholder-form">Nome do contribuinte</label>
                                </div>
                                <div className="input-container">
                                    <input id="email" className="input" type="text" placeholder=" " />
                                    <label for="email" className="placeholder-form">Email</label>
                                </div>
                                <div className="input-container">
                                    <input id="telefone" className="input" type="text" placeholder=" " />
                                    <label for="telefone" className="placeholder-form">Telefone para contato</label>
                                </div>
                                <div className="input-container">
                                    <input id="valor-doacao" className="input" type="text" placeholder=" " />
                                    <label for="valor-doacao" className="placeholder-form">Valor da doação</label>
                                </div>
                                <button className="donation-form-button">Gerar QR Code</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div style={{ height: '70%' }}>
                        <h1>Esse projeto não permite doações.</h1>
                    </div>}
            </Container>
        </>
    )
}