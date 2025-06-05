import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';

export const Detalle = ({ alumnos }) => {
  const { lu } = useParams(); //// se obtiene el lu desde la URL
  const navigate = useNavigate();

  const alumno = alumnos.find((a) => a.lu === lu); //// se busca al alumno por lu

  if (!alumno) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          Alumno no encontrado.
        </div>
      </div>
    );
  }////aqui se hace un control: si no se encuentra el alumno, mostramos un cartel de Bootstrap diciendo “Alumno no encontrado”

  return (
    <div>
      <h2 className="text-center mt-4">Detalle del Alumno</h2>
      <Container className="d-flex justify-content-center mt-4">
        <Card style={{ width: '22rem' }}>
          <Card.Body className="text-center">
            <Card.Title>{alumno.nombre}</Card.Title>
            <Card.Text>
              <p><strong>LU:</strong> {alumno.lu}</p>
              <p><strong>Curso:</strong> {alumno.curso}</p>
              <p><strong>Email:</strong> {alumno.email}</p>
              <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
              <p><strong>Teléfono:</strong> {alumno.telefono}</p>
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/lista')}>
              Volver a la lista
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Detalle;
