import { Link, Outlet } from "react-router-dom";

export const App = () => {
    return (
        <div>
            <header>
                <h1>Home de Alumnos</h1>
                <nav>
                    <Link to="/">Inicio</Link>
                    <Link to="/lista">Lista de Alumnos</Link>
                    <Link to="/agregar">Nuevo Alumno</Link>
                    <Link to="/acercade">Acerca de</Link>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <p>2025© Gestion de Alumnos </p>
            </footer> 
        </div>
    );
}