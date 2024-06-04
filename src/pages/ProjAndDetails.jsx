import { useParams } from "react-router-dom";
import data from "../data/projetos.json"
import "../styles/Projetos.css"
import { ProgressBar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProjAndDetails() {
    const { id } = useParams()
    const item = data.find(item => item.id === parseInt(id));

    if (!item) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <Container>

            <div className="proj-title">
                <h1 style={{ fontWeight: "bold" }}>Lorem Ipsum Dolor Sit Amet</h1>
                {item.isDonate ?
                    <div className="proj-donation">
                        <img src={item.img} alt="" style={{ height: "350px", width: "600px" }} />
                        <div className="proj-donation-descr">
                            <h2>Faça uma doação!</h2>
                            Lorem ipsum dolor sit amet. Aut iure aliquid eos quis distinctio est tempore nostrum ut sint
                            alias. Ut laborum blanditiis est perferendis neque ut alias laboriosam. Non dolorem saepe ut
                            harum omnis et esse doloribus aut dolorem dolor et aliquam tempora.
                            <div className="donation">
                                <h4><strong>R${item.valorDoado.toFixed(2)} doados</strong></h4>
                                <ProgressBar variant="success" now={item.valorDoado} max={item.valorEsperado} />
                                <button className="donation-button">
                                    <Link to={`/doacao/${item.id}`}
                                        style={{ textDecoration: "none", color: "black" }}>
                                        Doar
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <img src={item.img} alt="" style={{ height: "350px", width: "600px" }} />
                }
            </div>
            <div className="hashtags">
                {item.hashtags.map((hashtag, index) => 
                    <div className="hashtag-item" key={index}><span>#{hashtag}</span></div>
                )}
            </div>
            <div className="proj-text">
                <strong>Descrição e objetivos</strong>
                <br />Et consequuntur voluptates aut sunt placeat aut nihil animi hic neque nesciunt At suscipit sunt ut corporis omnis. Aut ullam quos et natus error et sunt numquam nam tempora porro eum porro dicta et quis quae ea voluptates soluta.
                <br />
                <br /><strong>Responsável(is)</strong>
                <br />Et consequuntur voluptates.
                <br />
                <br /><strong>Vagas</strong>
                <br />Qui corporis cupiditate et rerum.
                <br />
                <br /><strong>Período de atividades</strong>
                <br />Lorem ipsum dolor sit amet.
                <br />
                <br /><strong>Carga horária</strong>
                <br />Lorem ipsum
                <br />
            </div>
                </Container>
        </>
    )
}