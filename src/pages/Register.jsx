import React, { useState } from 'react'
import '../styles/Login.css'
import axios from 'axios'

export default function Register() {
    const [message, setMessage] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [formData, setFormData] = useState({
        fullname: "",
        cpf: "",
        email: "",
        password: "",
        phone: "",
        bio: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData.password !== confirmPassword) {
            setMessage("As senhas não coincidem")
            return
        }

        try {
            await axios.post('http://localhost:3000/users', formData)
            setMessage("Cadastro realizado com sucesso!")
        } catch (error) {
            setMessage("Erro ao cadastrar usuário")
            console.log("Erro ao cadastrar usuário. ", error)
        }
    }

    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <h3>Inscreva-se</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input id="fullname" className="input-login" type="text" value={formData.fullname} onChange={handleChange} placeholder=" " />
                            <label htmlFor="fullname" className="placeholder-login">Nome</label>
                        </div>
                        <div className="input-container">
                            <input id="cpf" className="input-login" type="text" value={formData.cpf} onChange={handleChange} placeholder=" " />
                            <label htmlFor="cpf" className="placeholder-login">CPF</label>
                        </div>
                        <div className="input-container">
                            <input id="email" className="input-login" type="text" value={formData.email} onChange={handleChange} placeholder=" " />
                            <label htmlFor="email" className="placeholder-login">E-mail</label>
                        </div>
                        <div className="input-container">
                            <input id="password" className="input-login" type="password" value={formData.password} onChange={handleChange} placeholder=" " />
                            <label htmlFor="password" className="placeholder-login">Senha</label>
                        </div>
                        <div className="input-container">
                            <input id="confirmar-senha" className="input-login" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder=" " />
                            <label htmlFor="confirmar-senha" className="placeholder-login">Confirmar senha</label>
                        </div>
                        <div className="input-container">
                            <input id="phone" className="input-login" type="text" value={formData.phone} onChange={handleChange} placeholder=" " />
                            <label htmlFor="phone" className="placeholder-login">Telefone</label>
                        </div>
                        <div className="input-container">
                            <input id="bio" className="input-login" type="text" value={formData.bio} onChange={handleChange} placeholder=" " />
                            <label htmlFor="bio" className="placeholder-login">Bio</label>
                        </div>
                        <div className="button-container">
                            <button type="submit" className="cadastrar-button">Cadastrar</button>
                        </div>
                        {message && <p style={{textAlign: "center"}}>{message}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}