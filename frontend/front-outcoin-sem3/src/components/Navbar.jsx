
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#despesas">Despesas</a></li>
                <li><a href="#perfil">Perfil</a></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;