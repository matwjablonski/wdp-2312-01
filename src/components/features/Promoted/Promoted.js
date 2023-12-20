import React from 'react';
import styles from './Promoted.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { getPromotedProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Promoted = () => {
  const promotedCount = 3; //currently for the visual layout of the page only
  const promotedProducts = useSelector(getPromotedProducts); //currently for the visual layout of the page only
  const id = 'aenean-ru-bristique-2'; //currently for the visual layout of the page only

  const dots = [];
  for (let i = 0; i < promotedCount; i++) {
    dots.push(
      <li>
        <a></a>
      </li>
    );
  }

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
              <ProductBox {...promotedProducts[0]} isPromoted={true} />
            </div>
          </div>
          <div className={`col-8`}>
            <div className={styles.sliderWrapper}>
              <div
                className={styles.photo}
                style={{
                  backgroundImage: `url("${process.env.PUBLIC_URL}/images/products//${id}.jpg")`,
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
                <Button variant='outline' className={styles.arrayButton}>
                  <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </Button>
                <Button variant='outline' className={styles.arrayButton}>
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
