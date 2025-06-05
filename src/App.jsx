import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const App = () => {
  return (
    <>
      <header>
        <h1>Gestión de Alumnos</h1>
        
        <Navbar className="nav-bar">
          <Container>
            {/**link reemplaza al a (html), no recarga la pag**/}
            <Nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', color:'white'}}>
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/lista">Lista de Alumnos</Nav.Link>
              <Nav.Link as={Link} to="/agregar">Nuevo Alumno</Nav.Link>
              <Nav.Link as={Link} to="/acercade">Acerca de</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>2025© Gestión de Alumnos</p>
      </footer>
    </>
  );
};
