import { App } from '../App.jsx';
import { Home } from '../views/Home.jsx';
import { AcercaDe } from '../views/AcercaDe.jsx';
import { Agregar } from '../views/Agregar.jsx';
import { Listar } from '../views/Listar.jsx';
import { Detalle } from '../views/Detalle.jsx';
import { PaginaError } from '../views/PaginaError.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { EditarAlumno } from '../views/EditarAlumno.jsx';

export const router = ( alumnosActivos, alumnosEliminados, agregarAlumno, eliminarAlumno, restaurarAlumno, setAlumnos) =>
  createBrowserRouter([ // enrutador, observa los cambios de la URL y decide que cambiar
    {
      path: '/', //Especifica la URL que activa esa ruta 
      element: <App />, // componente react que se va a renderizar cuando se visite esa ruta
      children: [ //define rutas hijas, que se rederizan dentro de <Outlet /> del componente padre App
        { index: true, element: <Home /> }, // equivale al path // index true , indica la ruta por defecto dentro del padre 
        { path: '*', element: <PaginaError/> },
        { path: '*/*', element: <PaginaError/> },
        { path: 'acercade', element: <AcercaDe /> },
        { path: 'agregar', element: <Agregar agregarAlumno={agregarAlumno} /> },
        { path: 'lista',
          element: (
            <Listar
              alumnos={alumnosActivos}
              eliminarAlumno={eliminarAlumno}
              restaurarAlumno={restaurarAlumno}
              papeleraMode={false}
            /> )
        },
        { path: 'papelera',
          element: (
            <Listar
              alumnos={alumnosEliminados}
              eliminarAlumno={eliminarAlumno}
              restaurarAlumno={restaurarAlumno}
              papeleraMode={true}
            /> )
        },
        { path: 'lista/:lu', element: <Detalle alumnos={alumnosActivos} /> }, 
        { path: 'editar/:id',
          element: (
          <EditarAlumno
            alumnos={alumnosActivos}
            setAlumnos={setAlumnos}   />)
        }
      ]
    }
  ]);
