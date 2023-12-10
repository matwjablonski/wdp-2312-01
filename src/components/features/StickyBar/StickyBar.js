import styles from './StickyBar.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { getCompareProducts } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeCompare } from '../../../redux/productsRedux';

const StickyBar = () => {
  const dispatch = useDispatch();
  const compareProducts = useSelector(state => getCompareProducts(state));

  const removehandler = (e, product) => {
    e.preventDefault();
    dispatch(removeCompare(product.id));
  };

  if (!compareProducts.length) {
    return '';
  } else
    return (
      <div className={styles.compareWrapper}>
        {compareProducts.map(product => (
          <div
            onClick={e => removehandler(e, product)}
            className={styles.compareImage}
            key={product.id}
            style={{
              backgroundImage: `url("${process.env.PUBLIC_URL}/images/products//${product.id}.jpg")`,
            }}
          >
            <Button className={styles.removeButton}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
        ))}
        <Button>Compare</Button>
      </div>
    );
};

export default StickyBar;
