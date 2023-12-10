import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../redux/productsRedux';
import { addToCompare } from '../../../redux/productsRedux';
import { getCompareProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  isFavorite,
  compare,
  promoted,
  isPromoted,
}) => {
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
    <div className={styles.root}>
      <div
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/images/products//${id}.jpg")`,
        }}
        className={styles.photo}
      >
        {!isPromoted && promo && <div className={styles.sale}>{promo}</div>}

        <div className={!isPromoted ? styles.buttons : styles.buttonsPromoted}>
          {!isPromoted && <Button variant='small'>Quick View</Button>}
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
        {isPromoted && (
          <div className={styles.timeCounter}>
            <div className={styles.circle}>
              <span className={styles.number}>25</span>
              <span className={styles.timeUnit}>days</span>
            </div>
            <div className={styles.circle}>
              <span className={styles.number}>10</span>
              <span className={styles.timeUnit}>hours</span>
            </div>
            <div className={styles.circle}>
              <span className={styles.number}>45</span>
              <span className={styles.timeUnit}>min</span>
            </div>
            <div className={styles.circle}>
              <span className={styles.number}>30</span>
              <span className={styles.timeUnit}>secs</span>
            </div>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          {isPromoted && (
            <Button variant='outline'>
              <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
            </Button>
          )}
          <Button
            className={isFavorite ? styles.active : undefined}
            variant='outline'
            onClick={handleAddToFavorite}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={compare ? styles.active : undefined}
            onClick={handleAddToCompare}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>

        <div className={styles.price}>
          {promoted && (
            <div className={styles.priceBeforePromotion}>
              <span>$ {price + 0.3 * price}</span>
            </div>
          )}
          <Button noHover variant='small' className={styles.priceButton}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  compare: PropTypes.bool,
  promoted: PropTypes.bool,
  isPromoted: PropTypes.bool,
};

export default ProductBox;
