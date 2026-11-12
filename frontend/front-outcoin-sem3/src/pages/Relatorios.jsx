
import { useState } from 'react';
import './Relatorios.css';

function Relatorios() {
    const [mesSelecionado, setMesSelecionado] = useState('2026-11');

    const receitas = 5500;
    const despesas = 2300;
    const saldo = receitas - despesas;

    function formatarMoeda(valor) {
        return Number(valor).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    return (
        <main className="relatorios-pagina">
            <header className="relatorios-cabecalho">
                <div>
                    <h1>Relatórios</h1>
                    <p>Acompanhe e analise sua movimentação financeira.</p>
                </div>
            </header>

            <section className="relatorios-filtro">
                <label htmlFor="mesRelatorio">Período:</label>
                <input
                    id="mesRelatorio"
                    type="month"
                    value={mesSelecionado}
                    onChange={(e) => setMesSelecionado(e.target.value)}
                />
            </section>

            <section className="relatorios-resumo">
                <div className="relatorio-card">
                    <p>Total de receitas</p>
                    <h2 className="relatorio-receitas">
                        {formatarMoeda(receitas)}
                    </h2>
                </div>

                <div className="relatorio-card">
                    <p>Total de despesas</p>
                    <h2 className="relatorio-despesas">
                        {formatarMoeda(despesas)}
                    </h2>
                </div>

                <div className="relatorio-card">
                    <p>Saldo do período</p>
                    <h2>{formatarMoeda(saldo)}</h2>
                </div>
            </section>

            <section className="relatorios-categorias">
                <h2>Despesas por categoria</h2>
                <p>Distribuição dos gastos no período selecionado.</p>

                <div className="relatorio-categoria-item">
                    <span>Moradia</span>
                    <strong>{formatarMoeda(1000)}</strong>
                </div>

                <div className="relatorio-categoria-item">
                    <span>Alimentação</span>
                    <strong>{formatarMoeda(600)}</strong>
                </div>

                <div className="relatorio-categoria-item">
                    <span>Transporte</span>
                    <strong>{formatarMoeda(400)}</strong>
                </div>

                <div className="relatorio-categoria-item">
                    <span>Lazer</span>
                    <strong>{formatarMoeda(300)}</strong>
                </div>
            </section>
        </main>
    );
}

export default Relatorios;
