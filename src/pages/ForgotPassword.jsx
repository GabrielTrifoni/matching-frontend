import '../styles/Login.css'

export default function ForgotPassword() {
    return (
        <>
            <div class="login-container">
                <div class="login-card">
                    <h3>Esqueci minha senha</h3>
                    <div class="input-container">
                        <input id="rec-email" class="input-login" type="text" placeholder=" " />
                        <label for="rec-email" class="placeholder-login">E-mail de recuperação</label>
                    </div>
                    <div class="button-container">
                        <button class="cadastrar-button">Recuperar</button>
                    </div>
                </div>
            </div>
        </>
    )
}