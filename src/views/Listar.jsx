import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
// Componente que muestra una lista de alumnos o una papelera dependiendo del modo
export const Listar = ({ alumnos, eliminarAlumno, restaurarAlumno, papeleraMode = false }) => {
  const navigate = useNavigate();
  return (
    <div className="container mt-4 p-4 rounded shadow" style={{ backgroundColor: '#fef3f7' }}>

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
        <div className="table-responsive">
          <table className="table table-bordered table-hover" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
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
                    {/* Si no estamos en papelera, mostramos botón de detalles y eliminar */}
                    {!papeleraMode ? (
                      <>
                        <Link
                          to={`/lista/${a.lu}`}
                          className="btn btn-sm btn-info me-2"
                        >
                          Ver Detalles
                        </Link>
                        <Button onClick={() => navigate(`/editar/${a.lu}`)}>
                          Editar
                        </Button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => {
                            // Confirmamos antes de mover a la papelera
                            if (confirm(`¿Seguro que querés enviar a la papelera a ${a.nombre}?`)) {
                              eliminarAlumno(a.lu);
                            }
                          }}
                        >
                          Eliminar
                        </button>
                      </>
                    ) : (
                      // Si estamos en la papelera, mostramos solo el botón de restaurar
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => restaurarAlumno(a.lu)}
                      >
                        Restaurar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Botón para cambiar entre la vista de lista y la papelera */}
      <div className="mt-3">
        <Link
          to={papeleraMode ? '/lista' : '/papelera'}
          className="btn btn-secondary"
        >
          {papeleraMode ? 'Volver a la Lista' : 'Ver Papelera'}
        </Link>
      </div>
    </div>
  );
};
