import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


export const Listar = ({ alumnos, eliminarAlumno }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Alumnos</h2>
      {alumnos.length === 0 ? (
        <p className="text-muted">No hay alumnos cargados.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>LU</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Curso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((a) => (
                <tr key={a.lu}>
                  <td>{a.lu}</td>
                  <td>{a.nombre}</td>
                  <td>{a.apellido}</td>
                  <td>{a.curso}</td>
                  <td>
                    <Link to={`/lista/${a.lu}`} className="btn btn-sm btn-info me-2">
                      Ver Detalles
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                      if (confirm(`¿Seguro que querés eliminar a ${a.nombre}?`)) {
                      eliminarAlumno(a.lu);
                      }
                      }}
                    >
      Eliminar
  </button>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
