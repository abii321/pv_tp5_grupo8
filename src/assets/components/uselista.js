import { useState } from "react";

// Hook personalizado para manejar la lógica de alumnos
export const useLista = () => {
  // Lista de alumnos activos
  const [alumnos, setAlumnos] = useState([]);

  // Lista de alumnos eliminados (papelera)
  const [papelera, setPapelera] = useState([]);

  // Agrega un nuevo alumno a la lista
  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  // Elimina un alumno de la lista activa y lo envía a la papelera
  const eliminarAlumno = (lu) => {
    const alumnoEliminado = alumnos.find((a) => a.lu === lu); // Buscamos el alumno por su LU
    if (alumnoEliminado) {
      setAlumnos(alumnos.filter((a) => a.lu !== lu)); // Quitamos el alumno de la lista activa
      setPapelera([...papelera, alumnoEliminado]);   // Lo agregamos a la papelera
    }
  };

  // Restaura un alumno desde la papelera a la lista activa
  const restaurarAlumno = (lu) => {
    const alumnoRestaurado = papelera.find((a) => a.lu === lu); // Buscamos en la papelera
    if (alumnoRestaurado) {
      setPapelera(papelera.filter((a) => a.lu !== lu));     // Quitamos de la papelera
      setAlumnos([...alumnos, alumnoRestaurado]);          // Lo agregamos a la lista activa
    }
  };

  // Retornamos los datos y funciones necesarias para usarlos en otros componentes
  return {
    alumnos,
    setAlumnos,
    papelera,
    agregarAlumno,
    eliminarAlumno,
    restaurarAlumno
  };
};
