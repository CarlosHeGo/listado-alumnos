import React, { useEffect, useState } from 'react';
import DetalleAlumnos from './DetalleAlumnos';
import './alumnos.css';

function ListadoAlumnos() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const getStudents = async () => {
    const response = await fetch("./alumnos.json");
    const data = await response.json();
    setStudents(data.alumnos);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <h1>Listado de Alumnos</h1>
      <ul className='student-list'>
        {students.map((student) => (
          <li key={student.nombre} className='student-item' onClick={() => setSelectedStudent(student)}>{student.nombre}</li>
        ))}
      </ul>
      <DetalleAlumnos student={selectedStudent} className='student-detail'/>
    </div>
  );
}

export default ListadoAlumnos;