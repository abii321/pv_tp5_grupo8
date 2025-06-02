import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router as createRouter } from './router/router';
import { useLista } from './assets/components/uselista';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/index.css'

const Main = () => {
    const {
     alumnos,        
  papelera,       
  agregarAlumno,
  eliminarAlumno,
  restaurarAlumno
  } = useLista();

  // Este router se vuelve a crear cada vez que alumnos/papelera cambian
  const router = useMemo(() => createRouter(
    alumnos,
    papelera,
    agregarAlumno,
    eliminarAlumno,
    restaurarAlumno
  ), [alumnos, papelera]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
