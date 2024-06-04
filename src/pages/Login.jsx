import React, { useState, useContext } from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../components/UserContext';

export default function Login() {
    const navigateTo = useNavigate();
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = login(email, senha);
        // console.log({email,senha})
        if (!user) {
            setError('Email ou senha inválidos');
        } else {
            setError('');
            navigateTo('/');
        }
    };

    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input id="email" className="input-login" type="text" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label for="email" className="placeholder-login"><i className="bi bi-envelope"></i> E-mail</label>
                        </div>
                        <div className="input-container">
                            <input id="senha" className="input-login" type="password" placeholder=" " value={senha} onChange={(e) => setSenha(e.target.value)} />
                            <label for="senha" className="placeholder-login"><i className="bi bi-lock"></i> Senha</label>
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