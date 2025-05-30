import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import axios from 'axios';

const Dashboard = ({ user }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/status', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setStatus(response.data.status);
      } catch (error) {
        console.error('Status check error:', error.response?.data?.message);
      }
    };
    checkStatus();
  }, [user.token]);

  return (
    <div className={styles.container}>
      <h2>Welcome, {user.email}</h2>
      <p>Subscription Status: <span className={status === 'Active' ? styles.active : styles.expired}>{status}</span></p>
      {status === 'Expired' && <p className={styles.renewMessage}>Please renew your subscription to access services.</p>}
      {status === 'Active' && <p>Access granted to all services!</p>}
    </div>
  );
};

export default Dashboard;