import { Link } from "react-router-dom"

export const Home = () => (
    <div>
        <h1>Inicio</h1>
        <p>Bienvenido/a al Sistema de Gestión de Alumnos</p>
        
        <p>Este sistema te parmite:</p>
        <ul>
            <li>Agregar, editar y consultar información detallada de los alumnos.</li>
            <li>Gestionar fácilmente tus registros estudiantiles desde un solo lugar.</li>
            <li>Navegar por las secciones para acceder a las funcionalidades</li>
        </ul>
        <img src="/public/gestion_alumnos.jpg" att="Imagen representativa" width='500px'></img>
    </div>
)