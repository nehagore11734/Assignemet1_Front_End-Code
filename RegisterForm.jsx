import React, { useState } from 'react';
import styles from './RegisterForm.module.css';
import axios from 'axios';

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    startDate: '',
    duration: 'monthly'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      onRegister(response.data);
    } catch (error) {
      console.error('Registration error:', error.response?.data?.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Subscription Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Subscription Duration</label>
          <select name="duration" value={formData.duration} onChange={handleChange}>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;