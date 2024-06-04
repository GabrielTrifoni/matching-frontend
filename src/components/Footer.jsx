import React from "react"
import '../styles/Footer.css'
import Logo from '../images/Logo_Unesp.svg'
import { MDBFooter } from "mdb-react-ui-kit"

export default function Footer() {
    return (
        <>
            <MDBFooter>
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-content">
                            <h4>Endereço</h4>
                            <p>Rua Quirino de Andrade, 215</p>
                            <p>Centro - São Paulo/SP</p>
                            <p>CEP 01049-010</p>
                            <p>Pabx: +55 11 5627-0233</p>
                        </div>
                        <div className="footer-content">
                            <h4>Contato</h4>
                            <p>contato@contato.com</p>
                            <p>+55 99 99999-9999</p>
                        </div>
                        <div className="footer-content">
                            <h4>Redes Sociais</h4>
                            <div className="footer-socialmedia">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="footer-content">
                            <img src={Logo} alt="Logo da Unesp" />
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>@Copyright 2024 Todos os Direitos Reservados</p>
                </div>
            </MDBFooter>
        </>
    )
}