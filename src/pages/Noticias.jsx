import "../styles/Noticias.css"
import data from "../data/noticias.json"
import { Link } from "react-router-dom";

export default function Noticias() {
    return (
        <>
            <div className="wrapper">
                {data.map(item => (
                    <div key={item.id} className="card">
                        <img src={item.img} alt="" />
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-content">{item.description}</p>
                        <button className="card-button">
                            <Link to={`/noticias/${item.id}`}
                                style={{ textDecoration: "none", color: "black" }}>
                                Saiba Mais
                            </Link>
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}