import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionButtons.module.scss';
import Button from '../../Button/Button';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faExchangeAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  getCompareProducts,
  addToCompare,
  toggleFavorite,
} from '../../../../redux/productsRedux';

const ActionButtons = ({ id, favorite, comparison }) => {
  const dispatch = useDispatch();

  const compareProducts = useSelector(state => getCompareProducts(state));

  const handleAddToFavorite = e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  const isProductAlreadyCompared = compareProducts.some(product => product.id === id);

  const handleAddToCompare = e => {
    e.preventDefault();

    if (!isProductAlreadyCompared) {
      if (compareProducts.length < 4) {
        dispatch(addToCompare(id));
      } else {
        alert('You can add max four products to compare');
      }
    } else {
      alert('This product is already added to compare');
      return;
    }
  };

  return (
    <div className={clsx(styles.buttons, styles.tooltip)}>
      <Button
        className={favorite ? styles.active : undefined}
        variant='outline'
        onClick={handleAddToFavorite}
      >
        <FontAwesomeIcon icon={farHeart}></FontAwesomeIcon>
      </Button>
      <span className={styles.tooltipText}>Add to favorite</span>
      <Button
        className={comparison ? styles.active : undefined}
        variant='outline'
        onClick={handleAddToCompare}
      >
        <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
      </Button>
      <span className={styles.tooltipText}>Add to compare</span>
      <Button variant='outline'>
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
      </Button>
      <span className={styles.tooltipText}> Quick view</span>
      <Button variant='outline'>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
      </Button>
      <span className={styles.tooltipText}>Add to cart</span>
    </div>
  );
};
ActionButtons.propTypes = {
  id: PropTypes.string,
  favorite: PropTypes.bool,
  comparison: PropTypes.bool,
};
export default ActionButtons;
