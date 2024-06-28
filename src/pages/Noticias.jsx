import "../styles/Noticias.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { formatDate } from "../utils/handleDateFormatting";

export default function Noticias() {
    const { token } = useAuth();
    const [news, setNews] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchNews() {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/news?page=${currentPage}&size=4`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { payload } = response.data
                console.log(payload)
                currentPage === 1 &&
                    setTotalPages(Array.from({ length: payload.totalPages }, (_v, i) => i + 1));
                console.log(payload);
                setNews(payload.items)
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        fetchNews();
    }, [])

    return (
        <>
            <div className="news-wrapper">
                {loading && <span>Carregando...</span>}
                {news && news.map(item => (
                    <div key={item.id} className="news-card">
                        {item.attachment && item.attachment.url ? (
                            <img src={item.attachment.url} alt={item.attachment.fileName} />
                        ) : (
                            <></>
                        )}
                        <main>
                            <span>{formatDate(item.writtenDate)}</span>
                            <h3 className="news-card-title">{item.title}</h3>
                        </main>
                        <Link to={`/noticias/${item.id}`}>
                            <button className="news-card-button">
                                Saiba Mais
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    )
}