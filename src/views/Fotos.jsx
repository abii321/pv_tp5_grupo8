import Carousel from 'react-bootstrap/Carousel';

export const Fotos = () => {
  return (
    <Carousel /*style={{ width: '80%', margin: '0 auto' }}*/ >
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/public/home/principal1.jpg"
        />
        <Carousel.Caption>
          <h3>Inicio</h3>
          <p>Bienvenido/a al Sistema de Gestión de Alumnos</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/public/home/principal2.jpg"
        />
        <Carousel.Caption>
          <h3>Funcionalidad 1</h3>
          <p>Agregar, editar y consultar información detallada de los alumnos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/public/home/principal3.png"
        />
        <Carousel.Caption>
          <h3>Funcionalidad 2</h3>
          <p>Gestionar fácilmente tus registros estudiantiles desde un solo lugar.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/public/home/principal4.png"
          style={{ objectFit: 'cover', height: 'auto'}}
        />
        <Carousel.Caption>
          <h3>Funcionalidad 3</h3>
          <p>Navegar por las secciones para acceder a las funcionalidades</p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}
