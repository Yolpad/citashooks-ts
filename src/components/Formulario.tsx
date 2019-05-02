import React, { useState } from "react";

export interface ICita {
  mascota: string;
  propietario: string;
  fecha: string;
  hora: string;
  sintomas: string;
}

const initialState = {
  mascota: "",
  propietario: "",
  fecha: "",
  hora: "",
  sintomas: ""
};

interface IFormularioProps {
  crearCita: (cita: ICita) => void;
}
function Formulario(props: IFormularioProps) {
  const [cita, setCita] = useState<ICita>(initialState);
  const { crearCita } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    crearCita(cita);
    setCita(initialState);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  return (
    <React.Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={cita.mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={handleChange}
          value={cita.propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={handleChange}
          value={cita.fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={handleChange}
          value={cita.hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={cita.sintomas}
        />

        <button type="submit" className="button-primary u-full-width">
          Agregar
        </button>
      </form>
    </React.Fragment>
  );
}

export default Formulario;
