
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    function handleCadastro(event) {
        event.preventDefault();

        if (senha !== confirmarSenha) {
            alert('As senhas não são iguais!');
            return;
        }

        alert('Cadastro realizado com sucesso!');
        navigate('/login');
    }

    return (
        <main className="cadastro-pagina">
            <section className="cadastro-card">

                <div className="cadastro-logo">
                    <h1>Out<span>Coin</span></h1>
                    <p>CONTROLE DE DESPESAS</p>
                </div>

                <div className="cadastro-titulo">
                    <h2>Crie sua conta</h2>
                    <p>Comece a organizar sua vida financeira.</p>
                </div>

                <form className="cadastro-formulario" onSubmit={handleCadastro}>
                    <label htmlFor="nome">Nome completo</label>
                    <input
                        id="nome"
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />

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
                        placeholder="Crie uma senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmarSenha">Confirmar senha</label>
                    <input
                        id="confirmarSenha"
                        type="password"
                        placeholder="Digite a senha novamente"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                    />

                    <button type="submit" className="cadastro-botao">
                        CRIAR CONTA
                    </button>
                </form>

                <div className="cadastro-login">
                    <p>Já possui uma conta? <Link to="/login">Faça login</Link></p>
                </div>

                <div className="cadastro-rodape">
                    <span>Organize. Economize. Evolua.</span>
                </div>

            </section>
        </main>
    );
}

export default Cadastro;
