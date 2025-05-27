import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Agregar = ({ agregarAlumno }) => {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: ""
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Alumno agregado:", formulario);
 agregarAlumno(formulario);
    navigate("/lista");
 
  };

  return (
    <div>
      <h2>Agregar Alumno</h2>
      <form onSubmit={handleSubmit}>
        <input name="lu" placeholder="LU" onChange={handleChange} required />
        <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input name="apellido" placeholder="Apellido" onChange={handleChange} required />
        <input name="curso" placeholder="Curso" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="domicilio" placeholder="Domicilio" onChange={handleChange} required />
        <input name="telefono" placeholder="Teléfono" onChange={handleChange} required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};
