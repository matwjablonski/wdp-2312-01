import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../common/Modal/Modal';
import styles from './TopBar.module.scss';

const TopBar = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <a href='#'>
                  USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`col text-right ${styles.topMenu}`}>
            <ul>
              <li>
                <a href='#'
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />{' '}
                  <span className={styles.topBarIconName}>Login</span>
                </a>
              </li>
              {( openModal && <Modal
                // open={openModal}
                onClose={() => {
                  setOpenModal(false);
                }} />)}
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />{' '}
                  <span className={styles.topBarIconName}>Register</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// TopBar.propTypes = {};

export default TopBar;
