import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "../contexts/AuthContext";
import { formatDate } from "../utils/handleDateFormatting";

export default function NoticiaDetails() {
    const { token } = useAuth();
    const [newsDetails, setNewsDetails] = useState({});
    const { id } = useParams()
    
    useEffect(() => {
        async function fetchNewsDetails() {
            try {
                const response = await axios.get(`http://localhost:3000/news/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const { payload } = response.data
                console.log(payload);
                setNewsDetails(payload)
            } catch (err) {
                console.log(err);
            }
        }

        fetchNewsDetails();
    }, [])

    return (
        <>
        <div style={{ textAlign: "center", padding: "30px" }}>
            <img src={newsDetails.attachment.url} alt="" style={{ height: "400px" }} />
        </div>
        <div className="news-details">
            <div className="news-details-inside">
                <span>{newsDetails.user.fullname}</span>
                <span>{newsDetails.user.email}</span>
            </div>

            <div className="news-details-inside">
                <span>{formatDate(newsDetails.writtenDate)}</span>
                <span>{formatDate(newsDetails.modifiedDate)}</span>
            </div>
        </div>
        <div className="news-text">
            <strong>{newsDetails.title}</strong><br />
            {newsDetails.description}
        </div>
    </>
    )
}