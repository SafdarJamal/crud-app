import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import {db} from '../../firebase'


import { employeesData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState([]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

 useEffect(() => {
    const fetchEmployees = async () => {
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const employeesData = querySnapshot.docs.map(doc => doc.data());
      setEmployees(employeesData);
    };

    fetchEmployees();
  }, []);

  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = async id => {
    try {
      const [employee] = employees.filter(employee => employee.id === id);
  
      const docRef = doc(db, 'employees', id);
      await deleteDoc(docRef);
  
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
        showConfirmButton: false,
        timer: 1500,
      });
  
      const employeesCopy = employees.filter(employee => employee.id !== id);
      setEmployees(employeesCopy);
    } catch (error) {
      console.error('Error deleting employee: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an error while deleting the employee. Please try again later.',
      });
    }
  };
  
  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
