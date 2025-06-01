import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router as createRouter } from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/index.css'

const Main = () => {
  const [alumnos, setAlumnos] = useState([]);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  const eliminarAlumno = (lu) => {
    setAlumnos(alumnos.filter((a) => a.lu !== lu));
  };

  const router = createRouter(alumnos, agregarAlumno, eliminarAlumno);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
