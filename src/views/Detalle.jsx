import { useParams, useNavigate } from "react-router-dom";

export const Detalle = ({ alumnos }) => {
  const { lu } = useParams();
  const navigate = useNavigate();

  const alumno = alumnos.find((a) => a.lu === lu);

  if (!alumno) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          Alumno no encontrado.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow" style={{ width: "24rem" }}>
        <div className="card-body">
          <h5 className="card-title">{alumno.nombre}</h5>
          <h6 className="card-subtitle mb-2 text-muted">LU: {alumno.lu}</h6>
          <p className="card-text">
            <strong>Email:</strong> {alumno.email}
            <br />
            <strong>Curso:</strong> {alumno.curso}
          </p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary mt-3"
              onClick={() => navigate("/lista")}
            >
              Volver a la lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};