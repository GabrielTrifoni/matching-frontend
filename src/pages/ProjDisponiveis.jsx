import "../styles/Projetos.css"
import data from "../data/projetos.json"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "../contexts/AuthContext"

export default function ProjDisponiveis() {
    const [projects, setProjects] = useState([])
    const { token } = useAuth();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:3000/projects/byUser?page=0&size=5', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                const { payload } = response.data;

                console.log(payload);
            } catch (err) {
                console.log(err);
            }
        }

        fetchProjects();
    }, [])

    return (
        <>
            <Container>
                <h1 className="title">Projetos Disponíveis</h1>
            </Container>

            <div className="project-container">
            <div className="project-card">
                <div className="project-card-subjects">
                    <span>Deep Learning</span>
                    <span>Machine Learning</span>
                    <span>subject 1</span>
                    <span>subject 1</span>
                </div>
                <section className="project-card-content">
                    <div className="project-card-subjects">
                    </div>
                    <h2>Esse será o título do projeto.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus beatae animi, sequi dolorem eveniet enim provident eos voluptatibus consequatur, ut illum, sapiente explicabo fuga veniam ipsam officia quia aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus beatae animi, sequi dolorem eveniet enim provident eos voluptatibus consequatur, ut illum, sapiente explicabo fuga veniam ipsam officia quia aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloribus neque expedita sint pariatur sunt, inventore aspernatur voluptatum alias maiores illo minima in facere tempora qui cupiditate laudantium vel cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem facilis consectetur sint facere corrupti fugit repudiandae omnis, voluptates quaerat a architecto id, modi, consequuntur sequi. Reprehenderit vitae aspernatur quos ratione...</p>
                    <footer className="project-card-footer">
                        <section className="project-card-metadata">
                            <span className="metadata">20/05/2024</span>
                            <span className="metadata">2 vagas</span>
                            <span className="metadata">~ 120.5 horas</span>
                        </section>
                        <button type="button" className="project-card-btn">Ver mais</button>  
                    </footer>
                </section>
            </div>

            <div className="project-card">
                <main className="project-card-content">
                    <h2>Esse será o título do projeto.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus beatae animi, sequi dolorem eveniet enim provident eos voluptatibus consequatur, ut illum, sapiente explicabo fuga veniam ipsam officia quia aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus beatae animi, sequi dolorem eveniet enim provident eos voluptatibus consequatur, ut illum, sapiente explicabo fuga veniam ipsam officia quia aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloribus neque expedita sint pariatur sunt, inventore aspernatur voluptatum alias maiores illo minima in facere tempora qui cupiditate laudantium vel cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem facilis consectetur sint facere corrupti fugit repudiandae omnis, voluptates quaerat a architecto id, modi, consequuntur sequi. Reprehenderit vitae aspernatur quos ratione...</p>
                    <section className="project-card-metadata">
                        <span className="metadata">20/05/2024</span>
                        <span className="metadata">2 vagas</span>
                        <span className="metadata">~ 120.5 horas</span>
                    </section>
                    <footer className="project-card-footer">
                        <button type="button" className="project-card-btn">Ver mais</button>  
                    </footer>
                </main>
            </div>

            <div className="project-card">
                <main className="project-card-content">
                    <h2>Esse será o título do projeto.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus beatae animi, sequi dolorem eveniet enim provident eos voluptatibus consequatur, ut illum, sapiente explicabo fuga veniam ipsam officia quia aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus beatae animi, sequi dolorem eveniet enim provident eos voluptatibus consequatur, ut illum, sapiente explicabo fuga veniam ipsam officia quia aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloribus neque expedita sint pariatur sunt, inventore aspernatur voluptatum alias maiores illo minima in facere tempora qui cupiditate laudantium vel cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem facilis consectetur sint facere corrupti fugit repudiandae omnis, voluptates quaerat a architecto id, modi, consequuntur sequi. Reprehenderit vitae aspernatur quos ratione...</p>
                    <section className="project-card-metadata">
                        Data de entrega: <span className="metadata">20/05/2024</span>
                        Qtd. de vagas:<span className="metadata">2 vagas</span>
                        Carga horária: <span className="metadata">~ 120.5 horas</span>
                    </section>
                    <footer className="project-card-footer">
                        <button type="button" className="project-card-btn">Ver mais</button>  
                    </footer>
                </main>
            </div>
            </div>
        </>
    )
}