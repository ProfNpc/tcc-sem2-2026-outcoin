
package br.com.belval.outcoin.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

public class Despesa {

    private Integer idDespesa;
    private String descricao;
    private BigDecimal valor;
    private LocalDate dataDespesa;
    private String observacao;
    private Integer idUsuario;
    private Integer idCategoria;

    public Despesa() {
    }

	public Integer getIdDespesa() {
		return idDespesa;
	}

	public void setIdDespesa(Integer idDespesa) {
		this.idDespesa = idDespesa;
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

	public LocalDate getDataDespesa() {
		return dataDespesa;
	}

	public void setDataDespesa(LocalDate dataDespesa) {
		this.dataDespesa = dataDespesa;
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
		return Objects.hash(idDespesa);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)	
			return false;
		if (getClass() != obj.getClass())
			return false;
		Despesa other = (Despesa) obj;
		return Objects.equals(idDespesa, other.idDespesa);
	}

	@Override
	public String toString() {
		return "Despesa [idDespesa=" + idDespesa + ", descricao=" + descricao + ", valor=" + valor + ", dataDespesa="
				+ dataDespesa + ", observacao=" + observacao + ", idUsuario=" + idUsuario + ", idCategoria="
				+ idCategoria + "]";
	}

}

