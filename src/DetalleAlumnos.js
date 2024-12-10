import React from 'react';

function DetalleAlumnos({ student }) {
  if (!student) return <p>Selecciona un alumno para ver los detalles.</p>;

  const asignaturas = Object.entries(student.asignaturas);

  return (
    <div>
      <h2>{student.nombre}</h2>
      <h3>Asignaturas</h3>
      <ul>
        {asignaturas.map(([nombreAsignatura, notas], index) => (
          <li key={index}>
            <strong>{nombreAsignatura}</strong>: Promedio: {notas.promedio}, Evaluaciones: 
            {` ${notas.primera_evaluacion}, ${notas.segunda_evaluacion}, ${notas.tercera_evaluacion}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetalleAlumnos;