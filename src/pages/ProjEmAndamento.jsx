import "../styles/Projetos.css"
import data from "../data/projetos.json"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

export default function ProjEmAndamento() {
    return (
        <>
            <Container>
                <h1 className="title">Projetos em andamento</h1>
            </Container>
            {data.map(item => (
                <div key={item.id} className={item.id % 2 == 0 ? "container-projetos-blue" : "container-projetos"}>
                    <Container>
                        <div className="projs">
                            <div className="proj-img"><img className="proj-img" src={item.img} alt="" /></div>
                            <div className="proj-descr">
                                <h2>{item.title}</h2>
                                {item.description}
                            </div>
                        </div>
                        <button className="card-button">
                            <Link to={`/projetos-em-andamento/${item.id}`}
                                style={{ textDecoration: "none", color: "black" }}>
                                Saiba Mais
                            </Link>
                        </button>
                    </Container>
                </div>
            ))}
        </>
    )
}