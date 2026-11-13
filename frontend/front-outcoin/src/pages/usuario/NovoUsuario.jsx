
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { criarUsuario } from '../../services/usuariosService';

export default function NovoUsuario() {
  const navigate = useNavigate();

  // Dados do usuário
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  // Controle da tela
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');

  async function salvar(evento) {
    evento.preventDefault();
    setErro('');

    // Validação dos campos de texto
    if (!nome.trim() || !sobrenome.trim() || !email.trim()) {
      setErro('Preencha corretamente o nome, sobrenome e e-mail.');
      return;
    }

    // Validação das senhas
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    setSalvando(true);

    const usuario = {
      nome: nome.trim(),
      sobrenome: sobrenome.trim(),
      email: email.trim(),
      senha: senha,
      telefone: telefone.trim(),
      dataNascimento: dataNascimento
    };

    try {
      await criarUsuario(usuario);

      navigate('/usuarios', {
        state: {
          mensagem: 'Usuário cadastrado com sucesso!'
        }
      });

    } catch (e) {
      setErro(
        e.message || 'Não foi possível cadastrar o usuário.'
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <section>
      <h1>Novo usuário</h1>

      <p>
        Preencha os campos abaixo para cadastrar um novo usuário
        no OutCoin.
      </p>

      {erro && (
        <div className="erro">
          {erro}
        </div>
      )}

      <form className="formulario" onSubmit={salvar}>

        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          autoComplete="given-name"
          required
        />

        <label htmlFor="sobrenome">Sobrenome</label>
        <input
          id="sobrenome"
          name="sobrenome"
          type="text"
          placeholder="Digite o sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          autoComplete="family-name"
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          name="senha"
          type="password"
          placeholder="Digite uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          autoComplete="new-password"
          required
        />

        <label htmlFor="confirmarSenha">Confirmar senha</label>
        <input
          id="confirmarSenha"
          name="confirmarSenha"
          type="password"
          placeholder="Digite a senha novamente"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          autoComplete="new-password"
          required
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          placeholder="Digite o telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          autoComplete="tel"
          required
        />

        <label htmlFor="dataNascimento">Data de nascimento</label>
        <input
          id="dataNascimento"
          name="dataNascimento"
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          autoComplete="bday"
          required
        />

        <div className="barra-rodape">
          <button
            type="button"
            className="botao botao-secundario"
            onClick={() => navigate('/usuarios')}
            disabled={salvando}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="botao botao-primario"
            disabled={salvando}
          >
            {salvando ? 'Salvando...' : 'Cadastrar usuário'}
          </button>
        </div>

      </form>
    </section>
  );
}
