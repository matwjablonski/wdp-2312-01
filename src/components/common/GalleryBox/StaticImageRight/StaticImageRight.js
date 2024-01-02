import React from 'react';
import Button from '../../Button/Button';
import { useSelector } from 'react-redux';
import { getAll } from '../../../../redux/productsRedux';
import styles from './StaticImageRight.module.scss';

const StaticImageRight = () => {
  const allProducts = useSelector(getAll);

  const currentProductId = 'aenean-ru-bristique-2';

  const currentProduct = allProducts.find(product => product.id === currentProductId);

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${currentProductId}.jpg)`,
        }}
      >
        <div className={styles.photoInner}>
          <h2>
            <span>from </span>${currentProduct.price}.00
          </h2>
          <p>Office Chair</p>
          <Button variant='outline' className={styles.shopButton}>
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StaticImageRight;
