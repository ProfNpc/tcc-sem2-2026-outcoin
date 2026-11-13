import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarUsuarioPorId, atualizarUsuario } from '../../services/usuariosService';

export default function EditarUsuario() {
  const navigate = useNavigate();
  const { id } = useParams();


  const [dataCriacao, setDataCriacao] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');




  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');

  // No carregamento inicial, busca o usuario na API: GET /usuarios/{id}
  useEffect(() => {
    async function carregar() {
      setCarregando(true);
      setErro('');
      try {
        const usuario = await buscarUsuarioPorId(id);
        setDataCriacao(usuario.dataCriacao ? String(usuario.dataCriacao) : '');
        setNome(usuario.nome ? usuario.nome : '');
        setSobrenome(usuario.sobrenome ? usuario.sobrenome : '');
        setEmail(usuario.email ? usuario.email : '');
        setTelefone(usuario.telefone ? usuario.telefone : '');

        /*
        Adicionar outros
        */

      } catch (e) {
        setErro('Não foi possível carregar o usuario. ' + e.message);
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [id]);

  async function salvar(evento) {
    evento.preventDefault();
    setSalvando(true);
    setErro('');

    const usuario = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone
    };

    try {
      await atualizarUsuario(id, usuario);
      navigate('/usuarios', { state: { mensagem: 'Usuario atualizado com sucesso' } });
    } catch (e) {
      setErro('Não foi possível atualizar o usuario. ' + e.message);
      setSalvando(false);
    }
  }

  return (
    <div>
      <h1>Editar Usuario</h1>

      {erro && <div className="erro">{erro}</div>}

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <form className="formulario" onSubmit={salvar}>
          <label htmlFor="id">id</label>
          <input id="id" type="text" value={id} readOnly />

          <label htmlFor="dataCriacao">dataCriacao</label>
          <input id="dataCriacao" type="text" value={dataCriacao} readOnly />

          <label htmlFor="nome">nome</label>
          <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

          <label htmlFor="sobrenome">descrição</label>
          <textarea id="sobrenome" rows="3" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />

          <label htmlFor="email">email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="telefone">telefone</label>
          <input id="telefone" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

          <div className="barra-rodape">
            <button type="button" className="botao botao-secundario" onClick={() => navigate('/usuarios')}>
              Cancelar
            </button>
            <button type="submit" className="botao botao-primario" disabled={salvando}>
              {salvando ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
