
jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

function EditarAlumno({ alumnos, setAlumnos }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        lu: "",
        nombre: "",
        apellido: "",
        curso: "",
        email: "",
        domicilio: "",
        telefono: "",
    });

    useEffect(() => {
        const alumno = alumnos.find(a => a.lu === id);
        if (alumno) setFormData(alumno);
    }, [id, alumnos]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAlumnos = alumnos.map(a => (a.lu === id ? formData : a));
        setAlumnos(updatedAlumnos);
        alert("Alumno actualizado correctamente");
        navigate("/alumnos");
    };

    return (
        <Container>
            <h2>Editar Alumno</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Curso</Form.Label>
                    <Form.Control type="text" name="curso" value={formData.curso} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar Cambios
                </Button>
            </Form>
        </Container>
    );
}

export default EditarAlumno;
