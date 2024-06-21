import ImageCarousel from "../components/ImageCarousel"
import { Container } from "react-bootstrap"
import "../styles/Home.css"
import randImg1 from "../images/rand-img1.png"
import randImg2 from "../images/rand-img2.png"
import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <ImageCarousel />
            <Container>
                <div className="extensao">
                    <div className="line">
                        <span><strong>Extensão</strong></span>
                    </div>
                    <div className="line-text">
                        <span>
                            Lorem ipsum dolor sit amet. Quo dignissimos eligendi et molestias corrupti et voluptates
                            incidunt est ullam minus et sint galisum. Et expedita natus nam suscipit nesciunt aut
                            nisi inventore et cumque placeat aut internos deserunt. Vel laboriosam praesentium et
                            ducimus velit At tenetur dicta eum doloremque doloribus et vero odit. Ut dolore omnis sit
                            dolorem autem ut nesciunt saepe!
                            Cum molestiae praesentium id temporibus reiciendis qui ratione perferendis aut consequatur
                            tenetur? Aut corporis itaque non fuga reprehenderit eos obcaecati veniam aut fugiat maxime
                            aut sunt optio et provident eveniet sed corrupti dolorem. Et eaque dolore aut accusamus nulla
                            ut autem itaque qui dicta doloribus. Qui voluptatem deleniti eum reiciendis deleniti aut
                            consequatur quasi At dolores nihil in sunt omnis est saepe minima qui laborum voluptate.
                        </span>
                    </div>
                    <button className="card-button">
                        <Link to="/extensao"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </div>
            </Container>
            <div className="projetos-disponiveis">
                <Container>
                    <div className="line">
                        <span style={{ backgroundColor: "#009FE0" }}><strong>Projetos Disponíveis</strong></span>
                    </div>
                    <div className="projetos">
                        <div className="main-project">
                            <img src={randImg1} alt="" />
                            <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                            <span>Quo dignissimos eligendi et molestias corrupti et voluptates</span>
                        </div>
                        <div className="container1">
                            <div className="side-projects">
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                            </div>
                            <div className="side-projects">
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                            </div>
                        </div>
                    </div>
                    <button className="card-button">
                        <Link to="/projetos-disponiveis"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </Container>
            </div>
            <div className="projetos-em-andamento">
                <Container>
                    <div className="line">
                        <span><strong>Projetos Em Andamento</strong></span>
                    </div>
                    <div className="projetos">
                        <div className="container2">
                            <div className="side-projects">
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                            </div>
                            <div className="side-projects">
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                            </div>
                        </div>
                        <div className="main-project2">
                            <img src={randImg1} alt="" />
                            <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                            <span>Quo dignissimos eligendi et molestias corrupti et voluptates</span>
                        </div>
                    </div>
                    <button className="card-button">
                        <Link to="/projetos-em-andamento"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </Container>
            </div>
            <div className="projetos-concluidos">
                <Container>
                    <div className="line">
                        <span style={{ backgroundColor: "#009FE0" }}><strong>Projetos Concluídos</strong></span>
                    </div>
                    <div className="projetos">
                        <div className="main-project">
                            <img src={randImg1} alt="" />
                            <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                            <span>Quo dignissimos eligendi et molestias corrupti et voluptates</span>
                        </div>
                        <div className="container1">
                            <div className="side-projects">
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                            </div>
                            <div className="side-projects">
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                                <img src={randImg2} alt="" />
                                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
                            </div>
                        </div>
                    </div>
                    <button className="card-button">
                        <Link to="/projetos-concluidos"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </Container>
            </div>
            <Container>
                <div className="latest-news">
                    <div className="line">
                        <span><strong>Últimas Divulgações</strong></span>
                    </div>
                    <div className="container-news">
                        <div className="news">
                            <img src={randImg1} alt="" />
                            <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span><br />
                            <span>Quo dignissimos eligendi et molestias corrupti et voluptates</span>
                        </div>
                        <div className="news">
                            <img src={randImg1} alt="" />
                            <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span><br />
                            <span>Quo dignissimos eligendi et molestias corrupti et voluptates</span>
                        </div>
                    </div>
                    <button className="card-button">
                        <Link to="/noticias"
                            style={{ textDecoration: "none", color: "black" }}>
                            Saiba Mais
                        </Link>
                    </button>
                </div>
            </Container>
        </>
    )
}