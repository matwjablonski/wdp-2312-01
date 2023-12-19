import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSelect.module.scss';

const ProductSelect = () => (
  <form action='' className={`flex hex ${styles.root}`}>
    <div className={`fluid ${styles.category}`}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <select name='' id=''>
        <option className={styles.option} value=''>
          Select a category
        </option>
      </select>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
  </form>
);

ProductSelect.propTypes = {
  children: PropTypes.node,
};

export default ProductSelect;