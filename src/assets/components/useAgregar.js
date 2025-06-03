import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Hook personalizado para manejar el formulario de agregar alumno
export const useAgregar = (agregarAlumno) => {
  const navigate = useNavigate();

  // Estado para almacenar los datos del formulario
  const [formulario, setFormulario] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: ""
  });

  // Estado para mostrar errores de validación
  const [error, setError] = useState("");

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  // Validar que todos los campos estén completos
  const validarFormulario = () => {
    return Object.values(formulario).every((campo) => campo.trim() !== "");
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!validarFormulario()) {
      setError("Por favor completá todos los campos.");
      return;
    }

    // Agregar alumno y redirigir
    agregarAlumno(formulario);
    navigate("/lista");
  };

  return {
    formulario,
    handleChange,
    handleSubmit,
    error
  };
};
