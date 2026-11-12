package repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.belval.outcoin.model.Usuario;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioRepository, Integer> {

	List<Usuario> findByNomeContainingIgnoreCase(String nome);

	List<Usuario> findByPrecoLessThanEqual(BigDecimal telefone);

	boolean existsByNome(String nome);
}