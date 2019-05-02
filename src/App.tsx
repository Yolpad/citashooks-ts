import React, { useState, useEffect } from "react";
import Formulario, { ICita } from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  let citasIniciales: ICita[] = [];
  let citasStorage: string | null = localStorage.getItem("citas");
  if (citasStorage) {
    citasIniciales = JSON.parse(citasStorage);
  }
  const [citas, setCitas] = useState<ICita[]>(citasIniciales);

  const crearCita = (cita: ICita) => {
    const nuevasCitas = [...citas, cita];
    setCitas(nuevasCitas);
  };

  const eliminarCita = (index: number) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };

  useEffect(() => {
    let citasStorage: string | null = localStorage.getItem("citas");
    if (citasStorage) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]); //useEffect solo se ejecuta cuando cambie citas

  const titulo =
    Object.keys(citas).length === 0 ? "No hay citas" : "Administrar Citas";

  return (
    <React.Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index) => (
              <Cita
                key={index}
                index={index}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
