
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  listarUsuarios,
  desativarUsuario
} from '../../services/usuariosService';

export default function ListaUsuarios() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  async function carregarUsuarios() {
    try {
      setCarregando(true);
      setErro('');

      const resposta = await listarUsuarios();

      // Aceita uma lista direta ou uma resposta paginada.
      const lista = Array.isArray(resposta)
        ? resposta
        : Array.isArray(resposta?.content)
          ? resposta.content
          : [];

      setUsuarios(lista);
    } catch (error) {
      setErro(error.message || 'Não foi possível carregar os usuários.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function handleDesativar(id) {
    const confirmar = window.confirm(
      'Tem certeza que deseja desativar este usuário?'
    );

    if (!confirmar) return;

    try {
      await desativarUsuario(id);
      await carregarUsuarios();
    } catch (error) {
      setErro(error.message || 'Não foi possível desativar o usuário.');
    }
  }

  return (
    <section>
      <div className="barra-rodape">
        <h1>Usuários</h1>

        <button
          type="button"
          className="botao botao-primario"
          onClick={() => navigate('/usuarios/novo')}
        >
          + Novo usuário
        </button>
      </div>

      {carregando && (
        <p>Carregando usuários...</p>
      )}

      {!carregando && erro && (
        <div>
          <p className="erro">{erro}</p>

          <button
            type="button"
            className="botao botao-secundario"
            onClick={carregarUsuarios}
          >
            Tentar novamente
          </button>
        </div>
      )}

      {!carregando && !erro && usuarios.length === 0 && (
        <p>Nenhum usuário cadastrado.</p>
      )}

      {!carregando && !erro && usuarios.length > 0 && (
        <div className="tabela-container">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {usuarios.map((usuario) => {
                const id = usuario.idUsuario ?? usuario.id;

                return (
                  <tr key={id}>
                    <td>{usuario.nome}</td>

                    <td>{usuario.sobrenome}</td>

                    <td>{usuario.email}</td>

                    <td>{usuario.telefone || '-'}</td>

                    <td>
                      <span
                        className={
                          usuario.ativo
                            ? 'status-ativo'
                            : 'status-inativo'
                        }
                      >
                        {usuario.ativo ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="botao botao-primario"
                        onClick={() =>
                          navigate(`/usuarios/editar/${id}`)
                        }
                      >
                        Editar
                      </button>

                      {usuario.ativo && (
                        <button
                          type="button"
                          className="botao botao-perigo"
                          onClick={() => handleDesativar(id)}
                        >
                          Desativar
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
