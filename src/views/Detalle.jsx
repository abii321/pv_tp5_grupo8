import { useParams, Link } from "react-router-dom";

export const Detalle = ({ alumnos }) => {
  const { lu } = useParams();
  const alumno = alumnos.find((a) => a.lu === lu);

  if (!alumno) {
    return (
      <div className="container mt-4">
        <h2>Detalle de Alumno</h2>
        <p className="text-danger">No se encontró ningún alumno con LU "{lu}".</p>
        <Link to="/lista" className="btn btn-secondary mt-2">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Detalle de Alumno</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>LU:</strong> {alumno.lu}</li>
        <li className="list-group-item"><strong>Nombre:</strong> {alumno.nombre}</li>
        <li className="list-group-item"><strong>Apellido:</strong> {alumno.apellido}</li>
        <li className="list-group-item"><strong>Curso:</strong> {alumno.curso}</li>
        <li className="list-group-item"><strong>Email:</strong> {alumno.email}</li>
        <li className="list-group-item"><strong>Domicilio:</strong> {alumno.domicilio}</li>
        <li className="list-group-item"><strong>Teléfono:</strong> {alumno.telefono}</li>
      </ul>
      <Link to="/lista" className="btn btn-primary mt-3">← Volver al listado</Link>
    </div>
  );
};
