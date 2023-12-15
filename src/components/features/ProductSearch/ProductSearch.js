import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={`flex ${styles.root}`}>
    <div className={`fluid ${styles.category}`}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <select name='' id=''>
        <option className={styles.option} value=''>
          Select a category
        </option>
      </select>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={`fluid ${styles.searchField}`}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
