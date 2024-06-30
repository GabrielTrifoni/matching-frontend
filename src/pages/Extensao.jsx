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
                            A extensão universitária da UNESP é uma ponte vital entre a academia e a comunidade,
                            promovendo a troca de conhecimento e experiências. Esses projetos envolvem alunos,
                            professores e a sociedade em atividades que visam o desenvolvimento social,
                            cultural e econômico. Por meio de parcerias e ações práticas, a extensão fortalece o
                            compromisso social da universidade, contribui para a formação cidadã dos estudantes e
                            oferece soluções inovadoras para os desafios locais e regionais. Na UNESP, a extensão é
                            uma ferramenta poderosa para transformar e enriquecer a realidade ao nosso redor.
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
                                A importância da extensão universitária vai além da simples troca de conhecimentos
                                entre a academia e a sociedade. Esses projetos desempenham um papel crucial na
                                formação integral dos estudantes, permitindo que eles apliquem teorias em situações
                                reais e adquiram competências práticas e sociais. Através da extensão, universidades
                                podem colaborar diretamente com comunidades locais, enfrentando desafios específicos
                                e promovendo o desenvolvimento sustentável. A extensão universitária é essencial
                                para construir um elo sólido entre o conhecimento acadêmico e as demandas da sociedade,
                                resultando em um impacto positivo e duradouro na vida de muitas pessoas.
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
                            Para participar da extensão universitária, os alunos devem seguir alguns passos
                            importantes. Primeiro, busque informações sobre os projetos disponíveis neste site 
                            ou diretamente com departamentos e coordenadorias de extensão.
                            <br/><br/>
                            Participe de eventos e feiras de extensão para conhecer as oportunidades e conversar
                            com coordenadores e alunos envolvidos. Consulte também professores e coordenadores de
                            curso para orientações adicionais.
                            <br/><br/>
                            Identifique um projeto de interesse e inscreva-se. Comprometa-se com o projeto, dedicando 
                            tempo e esforço às atividades.
                            <br/><br/>
                            Aproveite capacitações e treinamentos oferecidos pelos projetos e fique atento a
                            editais e prazos de bolsas de extensão. Engaje-se na comunidade, contribuindo de forma
                            significativa e respeitosa.
                        </span>
                    </div>
                </div>
            </Container>
            {/* <div style={{ backgroundColor: "#009FE0" }}>
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
            </Container> */}
        </>
    )
}