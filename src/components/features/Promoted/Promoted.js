import React from 'react';
import styles from './Promoted.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { getPromotedProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAll } from '../../../redux/productsRedux';
import { useState } from 'react';
import { useEffect } from 'react';

const Promoted = () => {
  const promotedProducts = useSelector(getPromotedProducts);
  const promotedCount = promotedProducts.length;
  const allProducts = useSelector(getAll);

  const [rightActiveProductNumber, setRightActiveProductNumber] = useState(0);
  const [rightActiveProduct, setRightActiveProduct] = useState(
    allProducts[rightActiveProductNumber]
  );

  const [leftActiveProductNumber, setLeftActiveProductNumber] = useState(0);
  const [leftActiveProduct, setLeftActiveProduct] = useState(
    promotedProducts[leftActiveProductNumber]
  );

  const rightArrayHandler = e => {
    e.preventDefault();
    if (rightActiveProductNumber < allProducts.length - 1) {
      const newProductNumber = rightActiveProductNumber + 1;
      setRightActiveProductNumber(newProductNumber);
      setRightActiveProduct(allProducts[newProductNumber]);
    }
  };

  const leftArrayHandler = e => {
    e.preventDefault();
    if (rightActiveProductNumber > 0) {
      const newProductNumber = rightActiveProductNumber - 1;
      setRightActiveProductNumber(newProductNumber);
      setRightActiveProduct(allProducts[newProductNumber]);
    }
  };

  const dots = [];
  for (let i = 0; i < promotedCount; i++) {
    dots.push(
      <li>
        <a></a>
      </li>
    );
  }

  useEffect(() => {
    // Funkcja aktualizująca aktywny produkt
    const updateProduct = () => {
      const nextProductNumber = (leftActiveProductNumber + 1) % promotedProducts.length;
      setLeftActiveProductNumber(nextProductNumber);
    };

    // Ustawienie interwału
    const interval = setInterval(updateProduct, 3000);

    // Czyszczenie interwału przy demontażu komponentu
    return () => clearInterval(interval);
  }, [leftActiveProductNumber, promotedProducts.length]);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col-4`}>
            <div className={styles.hotdealsBar}>
              <span>Hot deals</span>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
            <div>
              {promotedProducts.length > 0 && (
                <ProductBox
                  {...promotedProducts[leftActiveProductNumber]}
                  isPromoted={true}
                />
              )}
            </div>
          </div>
          <div className={`col-8`}>
            <div className={styles.sliderWrapper}>
              <div
                className={styles.photo}
                style={{
                  backgroundImage: `url("${process.env.PUBLIC_URL}/images/products//${rightActiveProduct.id}.jpg")`,
                }}
              >
                <div className={styles.photoInner}>
                  <h2>
                    <span>Indoor furniture</span>
                  </h2>
                  <p>Save up to 50% of all furniture</p>
                  <Button variant='outline' className={styles.shopButton}>
                    Shop now
                  </Button>
                </div>
              </div>

              <div className={styles.arrays}>
                <Button
                  variant='outline'
                  className={styles.arrayButton}
                  onClick={leftArrayHandler}
                >
                  <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </Button>
                <Button
                  variant='outline'
                  className={styles.arrayButton}
                  onClick={rightArrayHandler}
                >
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
