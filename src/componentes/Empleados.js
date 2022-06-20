import React from "react";
import "../stylesheets/Empleados.css";

function Empleados(props) {
  return (
    <div className="contenedor-empleado">
      <img
        className="imagen-empleado"
        src={require(`../imagenes/empleado-${props.imagen}.jpg`)}
        alt="Foto de Leo"
      />
      <div className="contenedor-texto-empleado">
        <p className="nombre-empleado">
          <strong>{props.nombre}</strong> - {props.puesto}
        </p>
        <p className="conocimiento-empleado">
          <strong>{props.conocimiento}</strong>
        </p>
        <p className="texto-empleado">"{props.texto}"</p>
      </div>
    </div>
  );
}

export default Empleados;
