
import { useState } from 'react';
import './Receitas.css';

function Receitas() {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [dataReceita, setDataReceita] = useState('');
    const [observacao, setObservacao] = useState('');

    // Dados fictícios para visualizar a página.
    const [receitas, setReceitas] = useState([
        {
            id: 1,
            descricao: 'Salário',
            valor: 3500,
            data_receita: '2026-11-10',
            observacao: 'Salário mensal'
        },
        {
            id: 2,
            descricao: 'Freelance',
            valor: 750,
            data_receita: '2026-11-08',
            observacao: 'Projeto extra'
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
            alert('Informe a descrição da receita.');
            return;
        }

        if (descricao.length > 100) {
            alert('A descrição deve ter no máximo 100 caracteres.');
            return;
        }

        if (!Number.isFinite(valorNumerico) || valorNumerico <= 0 || valorNumerico >= 100000000) {
            alert('Informe um valor válido, maior que zero e dentro do limite permitido.');
            return;
        }

        if (!dataReceita) {
            alert('Informe a data da receita.');
            return;
        }

        if (observacao.length > 255) {
            alert('A observação deve ter no máximo 255 caracteres.');
            return;
        }

        const novaReceita = {
            id: Date.now(),
            descricao: descricao.trim(),
            valor: valorNumerico,
            data_receita: dataReceita,
            observacao: observacao.trim()
        };

        setReceitas((listaAtual) => [
            novaReceita,
            ...listaAtual
        ]);

        setDescricao('');
        setValor('');
        setDataReceita('');
        setObservacao('');

        alert('Receita adicionada à lista!');
    }

    const totalReceitas = receitas.reduce(
        (total, receita) => total + receita.valor,
        0
    );

    return (
        <main className="receitas-pagina">

            <header className="receitas-cabecalho">
                <div>
                    <h1>Receitas</h1>
                    <p>Gerencie e acompanhe suas entradas financeiras.</p>
                </div>
            </header>

            <section className="receitas-resumo">
                <div className="receitas-resumo-card">
                    <p>Total de receitas</p>
                    <h2>{formatarMoeda(totalReceitas)}</h2>
                    <span>Entradas cadastradas</span>
                </div>

                <div className="receitas-resumo-card">
                    <p>Quantidade de receitas</p>
                    <h2>{receitas.length}</h2>
                    <span>Registros realizados</span>
                </div>
            </section>

            <section className="receitas-form-card">

                <div className="receitas-secao-titulo">
                    <h2>Cadastrar nova receita</h2>
                    <p>Preencha os dados da entrada financeira.</p>
                </div>

                <form onSubmit={handleSubmit} className="receitas-form">

                    <div className="receitas-campo">
                        <label htmlFor="descricao">Descrição *</label>
                        <input
                            id="descricao"
                            type="text"
                            placeholder="Ex.: Salário, Freelance, Venda..."
                            maxLength={100}
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </div>

                    <div className="receitas-campos-linha">

                        <div className="receitas-campo">
                            <label htmlFor="valor">Valor (R$) *</label>
                            <input
                                id="valor"
                                type="text"
                                inputMode="decimal"
                                placeholder="Ex.: 3500,00"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                required
                            />
                        </div>

                        <div className="receitas-campo">
                            <label htmlFor="dataReceita">Data da receita *</label>
                            <input
                                id="dataReceita"
                                type="date"
                                value={dataReceita}
                                onChange={(e) => setDataReceita(e.target.value)}
                                required
                            />
                        </div>

                    </div>

                    <div className="receitas-campo">
                        <label htmlFor="observacao">Observação</label>
                        <textarea
                            id="observacao"
                            placeholder="Informações adicionais sobre a receita..."
                            maxLength={255}
                            rows={4}
                            value={observacao}
                            onChange={(e) => setObservacao(e.target.value)}
                        />
                        <small>{observacao.length}/255 caracteres</small>
                    </div>

                    <button type="submit" className="receitas-botao">
                        + CADASTRAR RECEITA
                    </button>

                </form>

            </section>

            <section className="receitas-lista-card">

                <div className="receitas-secao-titulo">
                    <h2>Receitas cadastradas</h2>
                    <p>Confira as entradas financeiras registradas.</p>
                </div>

                <div className="receitas-lista">

                    {receitas.length === 0 ? (
                        <p className="receitas-vazio">
                            Nenhuma receita cadastrada.
                        </p>
                    ) : (
                        receitas.map((receita) => (
                            <div className="receita-item" key={receita.id}>

                                <div className="receita-icone">
                                    ↑
                                </div>

                                <div className="receita-info">
                                    <h3>{receita.descricao}</h3>
                                    <p>
                                        {formatarData(receita.data_receita)}
                                    </p>
                                    {receita.observacao && (
                                        <small>{receita.observacao}</small>
                                    )}
                                </div>

                                <strong className="receita-valor">
                                    + {formatarMoeda(receita.valor)}
                                </strong>

                            </div>
                        ))
                    )}

                </div>

            </section>

        </main>
    );
}

export default Receitas;
