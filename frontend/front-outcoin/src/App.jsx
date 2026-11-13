import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Principal from './pages/Principal';
import ListaUsuarios from './pages/usuario/ListaUsuarios';
import NovoUsuario from './pages/usuario/NovoUsuario';
import EditarUsuario from './pages/usuario/EditarUsuario';

export default function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
          <Route path="/usuarios/novo" element={<NovoUsuario />} />
          <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
        </Routes>
      </div>
    </>
  );
}
