import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <header>
        <h1>Gestión de Alumnos</h1>
        <nav>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0 }}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/lista">Lista de Alumnos</Link></li>
            <li> <Link to="/agregar">Nuevo Alumno</Link></li>
            <li><Link to="/acercade">Acerca de</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>2025© Gestión de Alumnos</p>
      </footer>
    </div>
  );
};
