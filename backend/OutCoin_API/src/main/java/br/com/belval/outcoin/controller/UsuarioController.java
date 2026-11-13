
package br.com.belval.outcoin.controller;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.belval.outcoin.model.Usuario;
import br.com.belval.outcoin.repository.UsuarioRepository;

@RestController
@RequestMapping("/Usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping
    public ResponseEntity<Usuario> criarUsuario(@RequestBody Usuario usuario) {

        usuario.setIdUsuario(null);
        usuario.setDataCadastro(LocalDateTime.now());
        usuario.setAtivo(true);

        Usuario salvo = usuarioRepository.save(usuario);

        return ResponseEntity.status(HttpStatus.CREATED).body(salvo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> obterUsuario(@PathVariable Long id) {

        Optional<Usuario> optional =
                usuarioRepository.findByIdUsuarioAndAtivo(id, true);

        if (optional.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(optional.get());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Usuario não encontrado!");
    }

    @GetMapping
    public ResponseEntity<Iterable<Usuario>> listarUsuarios() {

        return ResponseEntity.status(HttpStatus.OK)
                .body(usuarioRepository.findByAtivo(true));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> atualizarUsuario(
            @PathVariable Long id,
            @RequestBody Usuario usuarioNovo) {

        Optional<Usuario> optional = usuarioRepository.findById(id);

        if (optional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Usuario não encontrado!");
        }

        Usuario usuarioAtual = optional.get();

        usuarioAtual.setNome(usuarioNovo.getNome());
        usuarioAtual.setSobrenome(usuarioNovo.getSobrenome());
        usuarioAtual.setEmail(usuarioNovo.getEmail());
        usuarioAtual.setTelefone(usuarioNovo.getTelefone());

        usuarioRepository.save(usuarioAtual);

        return ResponseEntity.status(HttpStatus.OK)
                .body("Usuario atualizado com sucesso!");
    }

    @DeleteMapping("/fisico/{id}")
    public ResponseEntity<String> apagarUsuarioFisicamente(
            @PathVariable Long id) {

        Optional<Usuario> optional = usuarioRepository.findById(id);

        if (optional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Usuario não encontrado!");
        }

        usuarioRepository.deleteById(id);

        return ResponseEntity.status(HttpStatus.OK)
                .body("Usuario apagado com sucesso!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> apagarUsuario(@PathVariable Long id) {

        Optional<Usuario> optional = usuarioRepository.findById(id);

        if (optional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Usuario não encontrado!");
        }

        Usuario usuario = optional.get();

        usuario.setAtivo(false);
        usuarioRepository.save(usuario);

        return ResponseEntity.status(HttpStatus.OK)
                .body("Usuario apagado com sucesso!");
    }

}
