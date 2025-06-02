import { App } from '../App.jsx';
import { Home } from '../views/Home.jsx';
import { AcercaDe } from '../views/AcercaDe.jsx';
import { Agregar } from '../views/Agregar.jsx';
import { Listar } from '../views/Listar.jsx';
import { Detalle } from '../views/Detalle.jsx';
import { createBrowserRouter } from 'react-router-dom';

export const router = (
  alumnosActivos,
  alumnosEliminados,
  agregarAlumno,
  eliminarAlumno,
  restaurarAlumno
) =>
  createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'acercade', element: <AcercaDe /> },
        { path: 'agregar', element: <Agregar agregarAlumno={agregarAlumno} /> },
        {
          path: 'lista',
          element: (
            <Listar
              alumnos={alumnosActivos}
              eliminarAlumno={eliminarAlumno}
              restaurarAlumno={restaurarAlumno}
              papeleraMode={false}
            />
          )
        },
        {
          path: 'papelera',
          element: (
            <Listar
              alumnos={alumnosEliminados}
              eliminarAlumno={eliminarAlumno}
              restaurarAlumno={restaurarAlumno}
              papeleraMode={true}
            />
          )
        },
        {
          path: 'lista/:lu',
          element: <Detalle alumnos={alumnosActivos} />
        }
      ]
    }
  ]);
