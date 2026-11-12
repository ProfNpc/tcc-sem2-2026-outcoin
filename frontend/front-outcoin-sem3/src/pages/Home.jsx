import './Home.css';

import {h} from '../../asset/react.svg';

function Home() {
    return (
        <section className="home">
            <div className="home-conteudo">

                <div className="home-esquerda">
                    <span className="home-etiqueta">
                        CONTROLE FINANCEIRO INTELIGENTE
                    </span>

                    <h1>
                        Organize suas despesas.
                        <span> Controle seu dinheiro.</span>
                    </h1>

                    <p>
                        Com o OutCoin, você acompanha seus gastos,
                        organiza suas despesas e tem mais controle
                        sobre sua vida financeira.
                    </p>

                    <a href="#despesas" className="home-botao">
                        Acessar minhas despesas →
                    </a>

                    <div className="home-beneficios">
                        <span>✓ Organização</span>
                        <span>✓ Praticidade</span>
                        <span>✓ Controle</span>
                    </div>
                </div>

                <div className="home-direita">
                    <div className="home-card">

                        <div className="home-card-topo">
                            <span>Resumo financeiro</span>
                            <span className="home-status">● ATIVO</span>
                        </div>

                        <p className="home-card-legenda">
                            Controle suas finanças
                        </p>

                        <h2>OutCoin</h2>

                        <div className="home-grafico">
                            <div className="home-barra barra-1"></div>
                            <div className="home-barra barra-2"></div>
                            <div className="home-barra barra-3"></div>
                            <div className="home-barra barra-4"></div>
                            <div className="home-barra barra-5"></div>
                            <div className="home-barra barra-6"></div>
                        </div>

                        <div className="home-card-rodape">
                            <span>Despesas organizadas</span>
                            <strong>Seu dinheiro sob controle!</strong>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;