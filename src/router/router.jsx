import { App } from '../App.jsx';
import { Home } from '../views/Home.jsx';
import { AcercaDe } from '../views/AcercaDe.jsx';
import { Agregar } from '../views/Agregar.jsx';  // Importamos el componente Agregar
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'acercade', element: <AcercaDe /> },
      { path: 'agregar', element: <Agregar /> }   // Ruta para agregar alumnos
    ]
  }
]);
