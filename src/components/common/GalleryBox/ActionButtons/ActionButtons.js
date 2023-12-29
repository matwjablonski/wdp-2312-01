import React from 'react';
import styles from './ActionButtons.module.scss';
import Button from '../../Button/Button';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faExchangeAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';

const ActionButtons = () => {
  return (
    <div className={clsx(styles.buttons, styles.tooltip)}>
      <Button variant='outline'>
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
      </Button>
      <span className={styles.tooltiptext}>Add to favorite</span>
      <Button variant='outline'>
        <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
      </Button>
      <span className={styles.tooltiptext}>Add to compare</span>
      <Button variant='outline'>
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
      </Button>
      <span className={styles.tooltiptext}> Quick view</span>
      <Button variant='outline'>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
      </Button>
      <span className={styles.tooltiptext}>Add to cart</span>
    </div>
  );
};

export default ActionButtons;
