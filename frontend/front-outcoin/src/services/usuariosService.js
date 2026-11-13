const API_URL = import.meta.env.VITE_API_URL;
 
// Função central de comunicação com a API
async function requisicao(endpoint, opcoes = {}) {
  const resposta = await fetch(`${API_URL}${endpoint}`, {
    ...opcoes,
    headers: {
      'Content-Type': 'application/json',
      ...opcoes.headers,
    },
  });
 
  if (!resposta.ok) {
    const erro = await resposta.json().catch(() => null);
 
    throw new Error(
      erro?.message || `Erro na requisição: ${resposta.status}`
    );
  }
 
  if (resposta.status === 204) {
    return null;
  }
 
  return resposta.json();
}
 
// READ - Listar usuários
export async function listarUsuarios() {
  return requisicao('/usuarios');
}
 
// READ - Buscar usuário por ID
export async function buscarUsuarioPorId(id) {
  return requisicao(`/usuarios/${id}`);
}
 
// CREATE - Cadastrar usuário
export async function criarUsuario(dados) {
  return requisicao('/usuarios', {
    method: 'POST',
    body: JSON.stringify(dados),
  });
}
 
// UPDATE - Atualizar usuário
export async function atualizarUsuario(id, dados) {
  return requisicao(`/usuarios/${id}`, {
    method: 'PUT',
    body: JSON.stringify(dados),
  });
}
 
// DELETE - Desativar usuário
export async function desativarUsuario(id) {
  return requisicao(`/usuarios/${id}/desativar`, {
    method: 'PATCH',
  });
}