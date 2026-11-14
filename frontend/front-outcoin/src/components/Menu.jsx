
import { NavLink } from 'react-router-dom';

// Menu de navegação horizontal exibido em todas as páginas.
export default function Menu() {
  function classeLink({ isActive }) {
    if (isActive) {
      return 'menu-item menu-item-ativo';
    }
    return 'menu-item';
  }

  return (
    <nav className="menu">
      <NavLink to="/despesas" className={classeLink}>
        Despesas
      </NavLink>

      <NavLink to="/usuarios" className={classeLink}>
        Usuários
      </NavLink>

      <span
        className="menu-item menu-item-desabilitado"
        title="Em breve"
      >
        Pedidos
      </span>

      <NavLink to="/" end className={classeLink}>
        Principal
      </NavLink>
    </nav>
  );
}
