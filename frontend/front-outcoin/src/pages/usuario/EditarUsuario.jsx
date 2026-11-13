
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  buscarUsuarioPorId,
  atualizarUsuario
} from '../../services/usuariosService';

export default function EditarUsuario() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Dados do usuário
  const [dataCadastro, setDataCadastro] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  // Controle da tela
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');

  // Busca os dados do usuário na API
  useEffect(() => {
    async function carregarUsuario() {
      try {
        setCarregando(true);
        setErro('');

        const usuario = await buscarUsuarioPorId(id);

        setDataCadastro(
          usuario.dataCadastro ||
          usuario.dataCriacao ||
          ''
        );

        setNome(usuario.nome || '');
        setSobrenome(usuario.sobrenome || '');
        setEmail(usuario.email || '');
        setTelefone(usuario.telefone || '');
        setDataNascimento(
          usuario.dataNascimento
            ? String(usuario.dataNascimento).substring(0, 10)
            : ''
        );

      } catch (e) {
        setErro(
          e.message || 'Não foi possível carregar o usuário.'
        );
      } finally {
        setCarregando(false);
      }
    }

    carregarUsuario();
  }, [id]);

  // Atualiza os dados do usuário
  async function salvar(evento) {
    evento.preventDefault();
    setErro('');

    if (!nome.trim() || !sobrenome.trim() || !email.trim()) {
      setErro('Preencha corretamente o nome, sobrenome e e-mail.');
      return;
    }

    setSalvando(true);

    const usuario = {
      nome: nome.trim(),
      sobrenome: sobrenome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      dataNascimento: dataNascimento
    };

    try {
      await atualizarUsuario(id, usuario);

      navigate('/usuarios', {
        state: {
          mensagem: 'Usuário atualizado com sucesso!'
        }
      });

    } catch (e) {
      setErro(
        e.message || 'Não foi possível atualizar o usuário.'
      );
    } finally {
      setSalvando(false);
    }
  }

  // Formata a data de cadastro para exibição
  function formatarDataCadastro(data) {
    if (!data) return '-';

    return String(data).replace('T', ' ');
  }

  return (
    <section>
      <h1>Editar usuário</h1>

      <p>
        Atualize as informações cadastrais do usuário no OutCoin.
      </p>

      {erro && (
        <div className="erro">
          {erro}
        </div>
      )}

      {carregando ? (
        <p>Carregando dados do usuário...</p>
      ) : erro ? (
        <button
          type="button"
          className="botao botao-secundario"
          onClick={() => navigate('/usuarios')}
        >
          Voltar para usuários
        </button>
      ) : (
        <form className="formulario" onSubmit={salvar}>

          <label htmlFor="id">Código do usuário</label>
          <input
            id="id"
            type="text"
            value={id}
            readOnly
          />

          <label htmlFor="dataCadastro">Data de cadastro</label>
          <input
            id="dataCadastro"
            type="text"
            value={formatarDataCadastro(dataCadastro)}
            readOnly
          />

          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite o e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />

          <label htmlFor="dataNascimento">Data de nascimento</label>
          <input
            id="dataNascimento"
            name="dataNascimento"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
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
              {salvando ? 'Salvando...' : 'Salvar alterações'}
            </button>
          </div>

        </form>
      )}
    </section>
  );
}
