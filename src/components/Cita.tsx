import React from "react";
import { ICita } from "./Formulario";

interface ICitaProps {
  cita: ICita;
  index: number;
  eliminarCita: (index: number) => void;
}
function Cita(props: ICitaProps) {
  const { cita, index, eliminarCita } = props;

  const handleOnClick = (e: React.MouseEvent) => {
    // e.preventDefault();
    eliminarCita(index);
  };

  return (
    <div className="cita">
      <p>
        Mascota: <span>{cita.mascota}</span>
      </p>
      <p>
        Dueño: <span>{cita.propietario}</span>
      </p>
      <p>
        Fecha: <span>{cita.fecha}</span>
      </p>
      <p>
        Hora: <span>{cita.hora}</span>
      </p>
      <p>
        Síntomas: <span>{cita.sintomas}</span>
      </p>
      <button
        onClick={handleOnClick}
        type="button"
        className="button eliminar u-full-width"
      >
        Eliminar X
      </button>
    </div>
  );
}

export default Cita;
