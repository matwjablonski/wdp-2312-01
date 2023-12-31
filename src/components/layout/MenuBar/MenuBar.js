import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import ProductSelect from '../../features/ProductSelect/ProductSelect';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.fluid}>
          <div className={`${styles.inputsWidth}`}>
            <div className={styles.flexColumn}>
              <div>
                <ProductSearch />
              </div>
            </div>
            <button className={styles.navIcon} onClick={() => setShowNav(!showNav)}>
              <a href='#'>
                <FontAwesomeIcon icon={faBars} />
              </a>
            </button>
          </div>
          <div className='innerWrapperMenu'>
            <div className={'' + styles.menu}>
              <ul className={showNav ? styles.visible : ''}>
                <li>
                  <a href='#' className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#'>Furniture</a>
                </li>
                <li>
                  <a href='#'>Chair</a>
                </li>
                <li>
                  <a href='#'>Table</a>
                </li>
                <li>
                  <a href='#'>Sofa</a>
                </li>
                <li>
                  <a href='#'>Bedroom</a>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
