import React, { useState, useContext } from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../components/UserContext';
import axios from 'axios';

export default function Login() {
    const navigateTo = useNavigate();
    const { login } = useContext(UserContext);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/auth/login', loginData)
            if (response) {
                setError("")
                const { token } = response.data
                localStorage.setItem("token", token)
                navigateTo("/")
            } else {
                setError("Email ou senha inválidos")
            }
        } catch (error) {
            setError("Erro ao fazer login.")
            console.log("Erro ao fazer login. ", error)
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginData((prevLoginData) => ({
            ...prevLoginData,
            [id]: value
        }));
    };

    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input id="email" className="input-login" type="text" placeholder=" " value={loginData.email} onChange={handleChange} />
                            <label htmlFor="email" className="placeholder-login"><i className="bi bi-envelope"></i> E-mail</label>
                        </div>
                        <div className="input-container">
                            <input id="password" className="input-login" type="password" placeholder=" " value={loginData.password} onChange={handleChange} />
                            <label htmlFor="password" className="placeholder-login"><i className="bi bi-lock"></i> Senha</label>
                        </div>
                        <div className="button-container">
                            <button className="login-button" type='submit'>Entrar</button>
                        </div>
                        <div className="button-container">
                            <button className="signup-button"><Link to="/register" style={{ textDecoration: "none" }}>Inscreva-se</Link></button>
                        </div>
                        <div className="button-container">
                            <button className="forgotpassword-button"><Link to="/forgot-password" style={{ textDecoration: "none" }}>Esqueci minha senha</Link></button>
                        </div>
                    </form>
                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                </div>
            </div>
        </>
    )
}