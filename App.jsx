import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import styles from './App.module.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    setUser(userData);
  };

  return (
    <div className={styles.app}>
      <h1>Subscription Management System</h1>
      {!user ? <RegisterForm onRegister={handleRegister} /> : <Dashboard user={user} />}
    </div>
  );
};

export default App;