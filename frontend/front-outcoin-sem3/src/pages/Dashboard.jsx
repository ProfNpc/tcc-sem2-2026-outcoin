import { Link } from 'react-router-dom';
import './Dashboard.css';


function Dashboard() {
    const movimentacoes = [
        {
            id: 1,
            nome: 'Salário',
            categoria: 'Trabalho',
            data: '10/11/2026',
            valor: 3500,
            tipo: 'entrada'
        },
        {
            id: 2,
            nome: 'Conta de energia',
            categoria: 'Moradia',
            data: '09/11/2026',
            valor: 180,
            tipo: 'saida'
        },
        {
            id: 3,
            nome: 'Freelance',
            categoria: 'Trabalho',
            data: '08/11/2026',
            valor: 750,
            tipo: 'entrada'
        },
        {
            id: 4,
            nome: 'Supermercado',
            categoria: 'Alimentação',
            data: '07/11/2026',
            valor: 320,
            tipo: 'saida'
        }
    ];

    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    return (
        <div className="dashboard">

            <aside className="dashboard-menu">
                <div className="dashboard-logo">
                    <h2>Out<span>Coin</span></h2>
                    <p>CONTROLE DE DESPESAS</p>
                </div>

                <nav className="dashboard-navegacao">
                    <a href="#" className="menu-item ativo">
                        <span>▦</span> Dashboard
                    </a>

                    <Link to="/receitas" className="menu-item">
                        <span>↗</span> Receitas
                    </Link>

                    <Link to="/despesas" className="menu-item">
                        <span>↘</span> Despesas
                    </Link>

                    <a href="#" className="menu-item">
                        <span>▤</span> Relatórios
                    </a>
                </nav>

                <div className="dashboard-menu-rodape">
                    <p>Organize. Economize. Evolua.</p>
                </div>
            </aside>

            <main className="dashboard-conteudo">

                <header className="dashboard-cabecalho">
                    <div>
                        <h1>Dashboard</h1>
                        <p>Bem-vindo ao seu controle financeiro!</p>
                    </div>

                    <div className="dashboard-data">
                        <span>VISÃO GERAL</span>
                    </div>
                </header>

                <section className="dashboard-resumo">

                    <div className="resumo-card saldo-card">
                        <p>Saldo disponível</p>
                        <h2>R$ 3.750,00</h2>
                        <span>Seu saldo atual</span>
                    </div>

                    <div className="resumo-card">
                        <p>Total de receitas</p>
                        <h2 className="valor-entrada">R$ 4.250,00</h2>
                        <span>Dinheiro que entrou</span>
                    </div>

                    <div className="resumo-card">
                        <p>Total de despesas</p>
                        <h2 className="valor-saida">R$ 500,00</h2>
                        <span>Dinheiro que saiu</span>
                    </div>

                </section>

                <section className="dashboard-movimentacoes">

                    <div className="movimentacoes-cabecalho">
                        <div>
                            <h2>Últimas movimentações</h2>
                            <p>Acompanhe o dinheiro que entrou e saiu.</p>
                        </div>

                        <button className="botao-ver-todas">
                            Ver todas
                        </button>
                    </div>

                    <div className="movimentacoes-lista">

                        {movimentacoes.map((item) => (
                            <div className="movimentacao-item" key={item.id}>

                                <div className={`movimentacao-icone ${item.tipo}`}>
                                    {item.tipo === 'entrada' ? '↑' : '↓'}
                                </div>

                                <div className="movimentacao-info">
                                    <h3>{item.nome}</h3>
                                    <p>{item.categoria} • {item.data}</p>
                                </div>

                                <strong className={`movimentacao-valor ${item.tipo}`}>
                                    {item.tipo === 'entrada' ? '+' : '-'}
                                    {formatarMoeda(item.valor)}
                                </strong>

                            </div>
                        ))}

                    </div>

                </section>

            </main>

        </div>
    );
}

export default Dashboard;
