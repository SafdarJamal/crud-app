import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';

const Add = ({ setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = async e => {
    e.preventDefault();
  
    if (!firstName || !lastName || !email || !salary || !date) {
      alert('Todos los campos son requeridos.');
      return;
    }
  
    try {
      const employeeId = uuidv4(); // Generamos una nueva UUID
  
      await setDoc(doc(db, 'employees', employeeId), {
        id: employeeId,
        firstName,
        lastName,
        email,
        salary,
        date,
      });
  
      setEmployees(prevEmployees => [
        ...prevEmployees,
        {
          id: employeeId,
          firstName,
          lastName,
          email,
          salary,
          date,
        },
      ]);
  
      setIsAdding(false);
  
      setFirstName('');
      setLastName('');
      setEmail('');
      setSalary('');
      setDate('');
  
      Swal.fire({
        icon: 'success',
        title: 'Registered!',
        text: 'El empleado ha sido registrado satisfactoriamente.',
        showConfirmButton: false,
        timer: 1500,
      });
  
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  
  
  return (
    <div className="add-form">
      <h2>Agregar Nuevo Empleado</h2>
      <form onSubmit={handleAdd}>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salario:</label>
        <input
          type="number"
          id="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button type="submit">Agregar</button>
        <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
      </form>
    </div>
  );
};

export default Add;
