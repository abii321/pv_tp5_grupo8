import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Table, Button, Row, Col } from "react-bootstrap";


// Componente que muestra una lista de alumnos o una papelera dependiendo del modo
export const Listar = ({ alumnos, eliminarAlumno, restaurarAlumno, papeleraMode = false }) => {
  const navigate = useNavigate();//para navegar programáticamente entre rutas
  return (
    <Container className="mt-4 p-4 rounded shadow" style={{ backgroundColor: '#fef3f7' }}>

      {/* Título dinámico dependiendo si estamos en la lista o la papelera */}
      <h2 className="mb-4">
        {papeleraMode ? 'Papelera de Alumnos' : 'Lista de Alumnos'}
      </h2>

      {/* Si no hay alumnos en la lista o papelera, muestra un mensaje */}
      {(alumnos?.length ?? 0) === 0 ? (
/*eso evita que explote si alumnos no está definido.*/ 
        <p className="text-muted">
          {papeleraMode ? 'No hay alumnos en la papelera.' : 'No hay alumnos cargados.'}
        </p>
      ) : (
        //si hay alumnos, mostramos la tabla
        <div className="table-responsive">
         <Table striped bordered hover> 
 <thead>
  <tr>
    <th className="encabezado-tabla">LU</th>
    <th className="encabezado-tabla">Nombre</th>
    <th className="encabezado-tabla">Apellido</th>
    <th className="encabezado-tabla">Curso</th>
    <th className="encabezado-tabla">Acciones</th>
  </tr>
</thead> 
            <tbody>
              {/* Recorremos y mostramos cada alumno */}
              {alumnos.map((a) => (
                <tr key={a.lu}>
                  <td>{a.lu}</td>
                  <td>{a.nombre}</td>
                  <td>{a.apellido}</td>
                  <td>{a.curso}</td>
                  <td>
  {!papeleraMode ? (
    // Si no estamos en la papelera, mostramos los botones de ver detalles, editar y eliminar
    <Row>
      <Col className="mb-2">
        <Link
          to={`/lista/${a.lu}`}
          className="btn btn-info btn-sm w-100"
        >
          Ver Detalles
        </Link>
      </Col>
      <Col className="mb-2">
        <Button
          variant="primary"
          size="sm"
          className="w-100"
          onClick={() => navigate(`/editar/${a.lu}`)}
        >
          Editar
        </Button>
      </Col>
      <Col>
        <Button
          variant="danger"
          size="sm"
          className="w-100"
          onClick={() => {
            if (confirm(`¿Seguro que querés enviar a la papelera a ${a.nombre}?`)) {
              eliminarAlumno(a.lu);
            }
          }}
        >
          Eliminar
        </Button>
      </Col>
    </Row>
  ) : (
    // Si estamos en la papelera, mostramos el boton de restaurar
    <Button
      variant="success"
      size="sm"
      onClick={() => restaurarAlumno(a.lu)}
    >
      Restaurar
    </Button>
  )}
</td>

                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {/* Botón para cambiar entre la vista de lista y la papelera */}
     <Button
  as={Link}
  to={papeleraMode ? '/lista' : '/papelera'}
  variant="secondary"
>
  {papeleraMode ? 'Volver a la Lista' : 'Ver Papelera'}
</Button>
    </Container> 
  );
};
