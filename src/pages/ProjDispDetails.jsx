import { useParams } from "react-router-dom";
import data from "../data/projetos.json"
import "../styles/Projetos.css"
import { Container } from "react-bootstrap";

export default function ProjDispDetails() {
    const { id } = useParams()
    const item = data.find(item => item.id === parseInt(id));

    if (!item) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <Container>
                <div className="proj-title">
                    <h1 style={{ fontWeight: "bold", margin: "40px 0" }}>Lorem Ipsum Dolor Sit Amet</h1>
                    <img src={item.img} alt="" style={{ height: "350px", width: "600px" }} />
                </div>
                <div className="hashtags">
                    {item.hashtags.map((hashtag, index) =>
                        <div className="hashtag-item" key={index}><span>#{hashtag}</span></div>
                    )}
                </div>
                <div className="proj-text" style={{marginBottom: "60px"}}>
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