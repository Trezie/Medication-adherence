import React, { useState, useEffect } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications-component/dist/theme.css';
import { Container, Form, Button, Card } from 'react-bootstrap';

import './App.css';

function App() {
  const [medications, setMedications] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');
  const [schedule, setSchedule] = useState('');

  useEffect (() => {
    loadFromLocalStorage()
  }, []);

  const addMedication = () => {
    if (medicationName && dosage && schedule){
      const newMedication = {
        name : medicationName,
        dosage : dosage,
        schedule : schedule
      }
    

      setMedications([...medications, newMedication])
      setReminders(newMedications);
      saveToLocalStorage();
      clearForm();
    } else {
      alert('Please fill in all fields')
    }
  };

  const setReminders = (medication) => {
    NotificationManager.info(`Time to take ${medication.name} - ${medication.dosage}`, 'Medication Reminder')
  }
  const saveToLocalStorage = () => {
    
  }

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
