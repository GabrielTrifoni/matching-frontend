import '../styles/Login.css'

export default function Register() {
    return (
        <>
            <div class="login-container">
                <div class="login-card">
                    <h3>Inscreva-se</h3>
                    <div class="input-container">
                        <input id="nome" class="input-login" type="text" placeholder=" " />
                        <label for="nome" class="placeholder-login">Nome</label>
                    </div>
                    <div class="input-container">
                        <input id="identificacao" class="input-login" type="text" placeholder=" " />
                        <label for="identificacao" class="placeholder-login">CPF</label>
                    </div>
                    <div class="input-container">
                        <input id="email" class="input-login" type="text" placeholder=" " />
                        <label for="email" class="placeholder-login">E-mail</label>
                    </div>
                    <div class="input-container">
                        <input id="senha" class="input-login" type="password" placeholder=" " />
                        <label for="senha" class="placeholder-login">Senha</label>
                    </div>
                    <div class="input-container">
                        <input id="confirmar-senha" class="input-login" type="password" placeholder=" " />
                        <label for="confirmar-senha" class="placeholder-login">Confirmar senha</label>
                    </div>
                    <div class="input-container">
                        <input id="bio" class="input-login" type="text" placeholder=" " />
                        <label for="bio" class="placeholder-login">Bio</label>
                    </div>
                    <div class="button-container">
                        <button class="cadastrar-button">Cadastrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}