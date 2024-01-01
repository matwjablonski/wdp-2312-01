import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ onClose }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    setEmailError('');
    setPasswordError('');

    if (email && password.length >= 8) {
      onClose();
      return;
    }
    if (email === '' && password === '') {
      setPasswordError('please enter your password');
      setEmailError('please enter your email');
      return;
    }
    if (email === '') {
      setEmailError('please enter your email');
      return;
    }
    if (password === '') {
      setPasswordError('please enter your password');
      return;
    }
    if (password.length < 8) {
      setPasswordError('password must be at least 8 characters');
      return;
    }
  };

  const handleLogin = e => {
    e.preventDefault();


    validateForm(() => {
      localStorage.setItem(
        'user-info',
        JSON.stringify(userData)
      );
      setLoggedIn(true);
      setEmail('');
      setPassword('');
      onClose();

    });

    const userData = {
      email,
      password,
    };


  };

  const handleLogOut = () => {
    localStorage.removeItem('user-info');
    setLoggedIn(false);
    onClose();
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {!loggedIn ? (
          <>
            <button className={styles.closeBtn} onClick={onClose}> X </button>
            <div className={styles.modalText}>
              <h1>Please enter your email and password:</h1>
            </div>
            <form className={styles.loginForm} onSubmit={handleLogin}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Enter your email here"
              />
              <label className={styles.errorLabel}>{emailError}</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={8}
                placeholder="Enter your password here"
              />
              <label className={styles.errorLabel}>{passwordError}</label>
            </form>
            <div className={styles.modalButtons}>
              <button className={styles.modalActionBtn} onClick={handleClose}>Cancel</button>
              <button className={styles.modalActionBtn} onClick={handleLogin}>Login</button>
              <button className={styles.modalActionBtn} onClick={handleLogOut}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <button className={styles.closeBtn} onClick={onClose}> X </button>
            <div className={styles.modalTextLogOut}>
              <h3>You are logged in. If you want to logout click the button:</h3>
            </div>
            <div className={styles.modalButtons}>
              <button className={styles.modalActionBtn} onClick={handleLogOut}>Logout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
