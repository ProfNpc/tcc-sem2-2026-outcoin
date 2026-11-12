
package br.com.belval.outcoin.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

public class Receita {

    private Integer idReceita;
    private String descricao;
    private BigDecimal valor;
    private LocalDate dataRecebimento;
    private String observacao;
    private Integer idUsuario;
    private Integer idCategoria;


    public Receita() {
    }


	public Integer getIdReceita() {
		return idReceita;
	}


	public void setIdReceita(Integer idReceita) {
		this.idReceita = idReceita;
	}


	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public BigDecimal getValor() {
		return valor;
	}


	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}


	public LocalDate getDataRecebimento() {
		return dataRecebimento;
	}


	public void setDataRecebimento(LocalDate dataRecebimento) {
		this.dataRecebimento = dataRecebimento;
	}


	public String getObservacao() {
		return observacao;
	}


	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}


	public Integer getIdUsuario() {
		return idUsuario;
	}


	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}


	public Integer getIdCategoria() {
		return idCategoria;
	}


	public void setIdCategoria(Integer idCategoria) {
		this.idCategoria = idCategoria;
	}


	@Override
	public int hashCode() {
		return Objects.hash(idReceita);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Receita other = (Receita) obj;
		return Objects.equals(idReceita, other.idReceita);
	}


	@Override
	public String toString() {
		return "Receita [idReceita=" + idReceita + ", descricao=" + descricao + ", valor=" + valor
				+ ", dataRecebimento=" + dataRecebimento + ", observacao=" + observacao + ", idUsuario=" + idUsuario
				+ ", idCategoria=" + idCategoria + "]";
	}

}
