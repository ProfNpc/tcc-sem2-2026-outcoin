package br.com.belval.outcoin.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class Usuarios {
	public class Usuario {

		private Long idUsuario;
		private String nome;
		private String sobrenome;
		private String email;
		private String senhaHash;
		private String telefone;
		private LocalDate dataNascimento;
		private LocalDateTime dataCadastro;
		private boolean ativo;

		public Usuario() {
		}

	}

}
