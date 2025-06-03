import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { useAgregar } from "../assets/components/useAgregar.js";

// Vista para agregar un nuevo alumno
export const Agregar = ({ agregarAlumno }) => {
  const { formulario, handleChange, handleSubmit, error } = useAgregar(agregarAlumno);


  return (
    <Container>
      <h2>Agregar Alumno</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          {/* Alerta de error si falta completar algún campo */}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit} className="formulario-agregar">
            <Form.Group className="mb-3">
              <Form.Label>LU</Form.Label>
              <Form.Control
                type="text"
                name="lu"
                value={formulario.lu}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                value={formulario.apellido}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Curso</Form.Label>
              <Form.Control
                type="text"
                name="curso"
                value={formulario.curso}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Domicilio</Form.Label>
              <Form.Control
                type="text"
                name="domicilio"
                value={formulario.domicilio}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                name="telefono"
                value={formulario.telefono}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="secondary" type="submit">
              Agregar Alumno
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
