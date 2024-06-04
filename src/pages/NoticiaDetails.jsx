import { useParams } from "react-router-dom"
import data from '../data/noticias.json'

export default function NoticiaDetails() {
    const { id } = useParams()
    const item = data.find(item => item.id === parseInt(id));

    return (
        <>
            <div style={{ textAlign: "center", padding: "30px" }}>
                <img src={item.img} alt="" style={{ height: "400px" }} />
            </div>
            <div class="news-text">
                <strong>{item.title}</strong><br />
                {item.description}
            </div>
        </>
    )
}