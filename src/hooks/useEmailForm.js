import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useEmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!email.trim()) {
      setError('Email cannot be empty');
      return false;
    } else if (!emailRegex.test(email)) {
      setError('Please provide a valid email');
      return false;
    }
    setError('');
    return true;
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBlur = () => {
    validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log(email);
  };

  return { email, error, handleChange, handleBlur, handleSubmit };
}
