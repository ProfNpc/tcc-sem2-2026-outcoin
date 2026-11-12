package br.com.belval.outcoin.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

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

		public Long getIdUsuario() {
			return idUsuario;
		}

		public void setIdUsuario(Long idUsuario) {
			this.idUsuario = idUsuario;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public String getSobrenome() {
			return sobrenome;
		}

		public void setSobrenome(String sobrenome) {
			this.sobrenome = sobrenome;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getSenhaHash() {
			return senhaHash;
		}

		public void setSenhaHash(String senhaHash) {
			this.senhaHash = senhaHash;
		}

		public String getTelefone() {
			return telefone;
		}

		public void setTelefone(String telefone) {
			this.telefone = telefone;
		}

		public LocalDate getDataNascimento() {
			return dataNascimento;
		}

		public void setDataNascimento(LocalDate dataNascimento) {
			this.dataNascimento = dataNascimento;
		}

		public LocalDateTime getDataCadastro() {
			return dataCadastro;
		}

		public void setDataCadastro(LocalDateTime dataCadastro) {
			this.dataCadastro = dataCadastro;
		}

		public boolean isAtivo() {
			return ativo;
		}

		public void setAtivo(boolean ativo) {
			this.ativo = ativo;
		}

		@Override
		public int hashCode() {
			return Objects.hash(idUsuario);
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Usuario other = (Usuario) obj;
			return Objects.equals(idUsuario, other.idUsuario);
		}

		@Override
		public String toString() {
			return "Usuario [idUsuario=" + idUsuario + ", nome=" + nome + ", sobrenome=" + sobrenome + ", email="
					+ email + ", senhaHash=" + senhaHash + ", telefone=" + telefone + ", dataNascimento="
					+ dataNascimento + ", dataCadastro=" + dataCadastro + ", ativo=" + ativo + "]";
		}

	}