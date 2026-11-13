
package br.com.belval.outcoin.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.belval.outcoin.model.Usuario;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    List<Usuario> findByNomeContainingIgnoreCase(String nome);

    List<Usuario> findByTelefone(String telefone);

    boolean existsByNome(String nome);

    Optional<Usuario> findByIdUsuarioAndAtivo(Long id, boolean ativo);

    List<Usuario> findByAtivo(boolean ativo);

}
