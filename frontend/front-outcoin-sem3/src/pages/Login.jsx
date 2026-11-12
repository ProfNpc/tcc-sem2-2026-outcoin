import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin(event) {
        event.preventDefault();
        navigate('/dashboard');
    }

    return (
        <main className="login-pagina">
            <section className="login-card">

                <div className="login-logo">
                    <h1>Out<span>Coin</span></h1>
                    <p>CONTROLE DE DESPESAS</p>
                </div>

                <div className="login-titulo">
                    <h2>Bem-vindo de volta!</h2>
                    <p>Entre na sua conta para continuar.</p>
                </div>

                <form className="login-formulario" onSubmit={handleLogin}>

                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        id="senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit" className="login-botao">
                        ENTRAR
                    </button>

                </form>

                <div className="login-cadastro">
                    <p>
                        Ainda não tem uma conta?
                        {' '}
                        <Link to="/cadastro">Cadastre-se</Link>
                    </p>
                </div>

                <div className="login-rodape">
                    <span>Organize. Economize. Evolua.</span>
                </div>

            </section>
        </main>
    );
}

export default Login;