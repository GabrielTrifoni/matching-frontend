import randImg from "../images/rand-img2.png"
import "../styles/Extensao.css"
import { Container } from "react-bootstrap"

export default function Extensao() {
    return (
        <>
            <Container>
                <div className="extensao">
                    <div className="line">
                        <span><strong>O que é a extensão?</strong></span>
                    </div>
                    <div className="line-text">
                        <span>
                            Lorem ipsum dolor sit amet. Quo dignissimos eligendi et molestias corrupti et voluptates
                            incidunt est ullam minus et sint galisum. Et expedita natus nam suscipit nesciunt aut
                            nisi inventore et cumque placeat aut internos deserunt. Vel laboriosam praesentium Et
                            ducimus velit At tenetur dicta eum doloremque doloribus et vero odit. Ut dolore omnis sit. Et
                            dolorem autem ut nesciunt saepe!
                            Cum molestiae praesentium id temporibus reiciendis qui ratione perferendis aut consequatur. Et
                            tenetur? Aut corporis itaque non fuga reprehenderit eos obcaecati veniam aut fugiat maxime. Et
                            aut sunt optio et provident eveniet sed corrupti dolorem. Et eaque dolore aut accusamus nulla. Et
                            ut autem itaque qui dicta doloribus. Qui voluptatem deleniti eum reiciendis deleniti aut. Et
                            consequatur quasi At dolores nihil in sunt omnis est saepe minima qui laborum voluptate.
                        </span>
                    </div>
                </div>
            </Container>
            <div style={{ backgroundColor: "#009FE0" }}>
                <Container>
                    <div className="importancia">
                        <div className="line">
                            <span><strong>Importância</strong></span>
                        </div>
                        <div className="line-text">
                            <span>
                                Lorem ipsum dolor sit amet. Quo dignissimos eligendi et molestias corrupti et voluptates
                                incidunt est ullam minus et sint galisum. Et expedita natus nam suscipit nesciunt aut
                                nisi inventore et cumque placeat aut internos deserunt. Vel laboriosam praesentium Et
                                ducimus velit At tenetur dicta eum doloremque doloribus et vero odit. Ut dolore omnis sit. Et
                                dolorem autem ut nesciunt saepe!
                                Cum molestiae praesentium id temporibus reiciendis qui ratione perferendis aut consequatur. Et
                                tenetur? Aut corporis itaque non fuga reprehenderit eos obcaecati veniam aut fugiat maxime. Et
                                aut sunt optio et provident eveniet sed corrupti dolorem. Et eaque dolore aut accusamus nulla. Et
                                ut autem itaque qui dicta doloribus. Qui voluptatem deleniti eum reiciendis deleniti aut. Et
                                consequatur quasi At dolores nihil in sunt omnis est saepe minima qui laborum voluptate.
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="participar">
                    <div className="line">
                        <span><strong>Como participar?</strong></span>
                    </div>
                    <div className="line-text">
                        <span>
                            Lorem ipsum dolor sit amet. Quo dignissimos eligendi et molestias corrupti et voluptates
                            incidunt est ullam minus et sint galisum. Et expedita natus nam suscipit nesciunt aut
                            nisi inventore et cumque placeat aut internos deserunt. Vel laboriosam praesentium Et
                            ducimus velit At tenetur dicta eum doloremque doloribus et vero odit. Ut dolore omnis sit. Et
                            dolorem autem ut nesciunt saepe!
                            Cum molestiae praesentium id temporibus reiciendis qui ratione perferendis aut consequatur. Et
                            tenetur? Aut corporis itaque non fuga reprehenderit eos obcaecati veniam aut fugiat maxime. Et
                            aut sunt optio et provident eveniet sed corrupti dolorem. Et eaque dolore aut accusamus nulla. Et
                            ut autem itaque qui dicta doloribus. Qui voluptatem deleniti eum reiciendis deleniti aut. Et
                            consequatur quasi At dolores nihil in sunt omnis est saepe minima qui laborum voluptate.
                        </span>
                    </div>
                </div>
            </Container>
            <div style={{ backgroundColor: "#009FE0" }}>
                <Container>
                    <div className="aluno-unesp">
                        <div className="line">
                            <span><strong>Aluno da Unesp</strong></span>
                        </div>
                        <div className="ext-content">
                            <img src={randImg} alt="" />
                            <span className="line-text-w-img">
                                Lorem ipsum dolor sit amet. Qui minus facilis aut explicabo omnis et fugiat laboriosam
                                sit maiores fugit? Ut blanditiis error At cumque nobis est ipsum ducimus hic minus rerum
                                eos internos sunt. Ut laborum autem vel numquam voluptas ut aliquam cupiditate vel
                                perferendis dolores. Ex voluptas praesentium sed reprehenderit dicta sed sint galisum.
                                Qui voluptate voluptas quo dolorem incidunt ex repellat neque qui aspernatur ducimus est
                                totam tenetur aut nisi ipsa! Aut modi culpa ut officia pariatur qui consectetur deleniti
                                ea deserunt voluptate. Ut harum esse in atque eaque sit amet assumenda eum sint debitis.
                                Aut nobis sunt ea dolorum eligendi et.
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="comunidade-ext">
                    <div className="line">
                        <span><strong>Comunidade Externa</strong></span>
                    </div>
                    <div className="ext-content">
                        <img src={randImg} alt="" />
                        <span className="line-text-w-img">
                            Lorem ipsum dolor sit amet. Qui minus facilis aut explicabo omnis et fugiat laboriosam
                            sit maiores fugit? Ut blanditiis error At cumque nobis est ipsum ducimus hic minus rerum
                            eos internos sunt. Ut laborum autem vel numquam voluptas ut aliquam cupiditate vel
                            perferendis dolores. Ex voluptas praesentium sed reprehenderit dicta sed sint galisum.
                            Qui voluptate voluptas quo dolorem incidunt ex repellat neque qui aspernatur ducimus est
                            totam tenetur aut nisi ipsa! Aut modi culpa ut officia pariatur qui consectetur deleniti
                            ea deserunt voluptate. Ut harum esse in atque eaque sit amet assumenda eum sint debitis.
                            Aut nobis sunt ea dolorum eligendi et.
                        </span>
                    </div>
                </div>
            </Container>
        </>
    )
}