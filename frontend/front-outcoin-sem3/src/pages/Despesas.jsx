
import { useState } from 'react';
import './Despesas.css';

function Despesas() {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [dataDespesa, setDataDespesa] = useState('');
    const [observacao, setObservacao] = useState('');
    const [idCategoria, setIdCategoria] = useState('');

    // Dados fictícios para visualizar a página.
    const [despesas, setDespesas] = useState([
        {
            id: 1,
            descricao: 'Conta de energia',
            valor: 180,
            data_despesa: '2026-11-09',
            id_categoria: 3,
            categoria: 'Moradia',
            observacao: 'Conta mensal'
        },
        {
            id: 2,
            descricao: 'Supermercado',
            valor: 320,
            data_despesa: '2026-11-07',
            id_categoria: 1,
            categoria: 'Alimentação',
            observacao: 'Compras do mês'
        }
    ]);

    function formatarMoeda(numero) {
        return Number(numero).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    function formatarData(data) {
        if (!data) return '';
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const valorNumerico = Number(valor.replace(',', '.'));

        if (!descricao.trim()) {
            alert('Informe a descrição da despesa.');
            return;
        }

        if (descricao.length > 100) {
            alert('A descrição deve ter no máximo 100 caracteres.');
            return;
        }

        if (
            !Number.isFinite(valorNumerico) ||
            valorNumerico <= 0 ||
            valorNumerico >= 100000000
        ) {
            alert('Informe um valor válido, maior que zero e dentro do limite permitido.');
            return;
        }

        if (!dataDespesa) {
            alert('Informe a data da despesa.');
            return;
        }

        if (!idCategoria) {
            alert('Selecione uma categoria para a despesa.');
            return;
        }

        if (observacao.length > 255) {
            alert('A observação deve ter no máximo 255 caracteres.');
            return;
        }

        const novaDespesa = {
            id: Date.now(),
            descricao: descricao.trim(),
            valor: valorNumerico,
            data_despesa: dataDespesa,
            id_categoria: Number(idCategoria),
            categoria: {
                1: 'Alimentação',
                2: 'Transporte',
                3: 'Moradia',
                4: 'Saúde',
                5: 'Educação',
                6: 'Lazer',
                7: 'Compras',
                8: 'Outros'
            }[idCategoria],
            observacao: observacao.trim()
        };

        setDespesas((listaAtual) => [novaDespesa, ...listaAtual]);

        setDescricao('');
        setValor('');
        setDataDespesa('');
        setIdCategoria('');
        setObservacao('');
       

        alert('Despesa adicionada à lista!');
    }

    const totalDespesas = despesas.reduce(
        (total, despesa) => total + despesa.valor,
        0
    );

    return (
        <main className="despesas-pagina">
            <header className="despesas-cabecalho">
                <div>
                    <h1>Despesas</h1>
                    <p>Gerencie e acompanhe seus gastos financeiros.</p>
                </div>
            </header>

            <section className="despesas-resumo">
                <div className="despesas-resumo-card">
                    <p>Total de despesas</p>
                    <h2>{formatarMoeda(totalDespesas)}</h2>
                    <span>Saídas cadastradas</span>
                </div>

                <div className="despesas-resumo-card">
                    <p>Quantidade de despesas</p>
                    <h2>{despesas.length}</h2>
                    <span>Registros realizados</span>
                </div>
            </section>

            <section className="despesas-form-card">
                <div className="despesas-secao-titulo">
                    <h2>Cadastrar nova despesa</h2>
                    <p>Preencha os dados do gasto financeiro.</p>
                </div>

                <form onSubmit={handleSubmit} className="despesas-form">
                    <div className="despesas-campo">
                        <label htmlFor="descricaoDespesa">Descrição *</label>
                        <input
                            id="descricaoDespesa"
                            type="text"
                            placeholder="Ex.: Aluguel, Mercado, Internet..."
                            maxLength={100}
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </div>

                    <div className="despesas-campos-linha">
                        <div className="despesas-campo">
                            <label htmlFor="valorDespesa">Valor (R$) *</label>
                            <input
                                id="valorDespesa"
                                type="text"
                                inputMode="decimal"
                                placeholder="Ex.: 350,00"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                required
                            />
                        </div>

                        <div className="despesas-campo">
                            <label htmlFor="dataDespesa">Data da despesa *</label>
                            <input
                                id="dataDespesa"
                                type="date"
                                value={dataDespesa}
                                onChange={(e) => setDataDespesa(e.target.value)}
                                required
                            />
                        </div>
                    </div>


                    <div className="despesas-campo">
                        <label htmlFor="idCategoria">Categoria *</label>

                        <select
                            id="idCategoria"
                            value={idCategoria}
                            onChange={(e) => setIdCategoria(e.target.value)}
                            required
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="1">Alimentação</option>
                            <option value="2">Transporte</option>
                            <option value="3">Moradia</option>
                            <option value="4">Saúde</option>
                            <option value="5">Educação</option>
                            <option value="6">Lazer</option>
                            <option value="7">Compras</option>
                            <option value="8">Outros</option>
                        </select>
                    </div>


                    <div className="despesas-campo">
                        <label htmlFor="observacaoDespesa">Observação</label>
                        <textarea
                            id="observacaoDespesa"
                            placeholder="Informações adicionais sobre a despesa..."
                            maxLength={255}
                            rows={4}
                            value={observacao}
                            onChange={(e) => setObservacao(e.target.value)}
                        />
                        <small>{observacao.length}/255 caracteres</small>
                    </div>

                    <button type="submit" className="despesas-botao">
                        + CADASTRAR DESPESA
                    </button>
                </form>
            </section>

            <section className="despesas-lista-card">
                <div className="despesas-secao-titulo">
                    <h2>Despesas cadastradas</h2>
                    <p>Confira os gastos financeiros registrados.</p>
                </div>

                <div className="despesas-lista">
                    {despesas.length === 0 ? (
                        <p className="despesas-vazio">
                            Nenhuma despesa cadastrada.
                        </p>
                    ) : (
                        despesas.map((despesa) => (
                            <div className="despesa-item" key={despesa.id}>
                                <div className="despesa-icone">↓</div>

                                <div className="despesa-info">
                                    <h3>{despesa.descricao}</h3>
                                    <p>{despesa.categoria} • {formatarData(despesa.data_despesa)}</p>

                                    {despesa.observacao && (
                                        <small>{despesa.observacao}</small>
                                    )}
                                </div>

                                <strong className="despesa-valor">
                                    - {formatarMoeda(despesa.valor)}
                                </strong>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </main>
    );
}

export default Despesas;
