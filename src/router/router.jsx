import { App } from '../App.jsx';
import { Home } from '../views/Home.jsx';
import { AcercaDe } from '../views/AcercaDe.jsx';
import { Agregar } from '../views/Agregar.jsx';
import { Listar } from '../views/Listar.jsx';
import { createBrowserRouter } from 'react-router-dom';


export const router = (alumnos, agregarAlumno, eliminarAlumno) =>
  createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'acercade', element: <AcercaDe /> },
        { path: 'agregar', element: <Agregar agregarAlumno={agregarAlumno} /> },
        { path: 'lista', element: <Listar alumnos={alumnos} eliminarAlumno={eliminarAlumno} /> }
      ]
    }
  ]);
