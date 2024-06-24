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
                            <p>Avenida 24 A, 1515</p>
                            <p>Bela Vista - Rio Claro, SP</p>
                            <p>CEP 13506-900</p>
                        </div>
                        <div className="footer-content">
                            <h4>Contato</h4>
                            <p>diretoriaigce.rc@unesp.br</p>
                            <p>+55 19 3526-9002</p>
                        </div>
                        <div className="footer-content">
                            <h4>Redes Sociais</h4>
                            <div className="footer-socialmedia">
                                <a href="https://www.facebook.com/UNESPUniversidadeEstadualPaulista/?locale=pt_BR" target="_blank">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://x.com/Unesp_Oficial" target="_blank">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                                <a href="https://www.instagram.com/unesp_oficial/" target="_blank">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/school/unesp---universidade-estadual-paulista-j-lio-de-mesquita-filho-/?originalSubdomain=br" target="_blank">
                                    <i className="bi bi-linkedin"></i>
                                </a>
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