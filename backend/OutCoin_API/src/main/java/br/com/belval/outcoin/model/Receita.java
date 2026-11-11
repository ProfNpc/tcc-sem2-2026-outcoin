
package br.com.belval.outcoin.model;

import java.math.BigDecimal;
import java.time.LocalDate;

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

}
