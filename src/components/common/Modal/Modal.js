import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ onClose, loggedIn, setLoggedIn }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user-info');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setLoggedIn(foundUser);
    }
  }, [setLoggedIn]);

  const handleLogin = e => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (email === '' && password === '') {
      setPasswordError('please enter your password');
      setEmailError('please enter your email');
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
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

    const userData = {
      email,
      password,
    };

    localStorage.setItem(
      'user-info',
      JSON.stringify(userData)
    );
    setLoggedIn(true);
    onClose();
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
        <button className={styles.closeBtn} onClick={onClose}> X </button>
        {!loggedIn ? (
          <>
            <div className={styles.modalText}>
              <h1>Please enter your email and password:</h1>
            </div>
            <form className={styles.loginForm} onSubmit={handleLogin}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email here"
              />
              <label className={styles.errorLabel}>{emailError}</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password here"
              />
              <label className={styles.errorLabel}>{passwordError}</label>
            </form>
            <div className={styles.modalButtons}>
              <button className={styles.modalActionBtn} onClick={handleClose}>Cancel</button>
              <button className={styles.modalActionBtn} onClick={handleLogin}>Login</button>
            </div>
          </>
        ) : (
          <>
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

Modal.propTypes = {
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.func,
};

export default Modal;
