
package br.com.belval.outcoin.model;

import java.math.BigDecimal;
import java.time.LocalDate;

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

}
