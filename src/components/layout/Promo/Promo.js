import styles from './Promo.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Promo = ({ promo }) => {
  return (
    <div className='container'>
      <section className={'container'}>
        <div className='row'>
          <div className={`${styles.left}`}>
            <img src={promo.sofa} alt='sofa' />
            <div className={styles.sectionLeft}>
              <p className={styles.titleLeftTop}>{promo.titleLeft}</p>
              <p className={styles.titleLeftMiddle}>{promo.subtitleLeft}</p>
              <span className={styles.titleLeftBottom}>{promo.discountLeft}</span>
            </div>
          </div>

          <div className={`${styles.right}`}>
            <div className={styles.topPictureWrapper}>
              <img src={promo.chair} alt='chair' />
              <div className={styles.containerTopImgContent}>
                <h2>
                  <span className={styles.boldText}>{promo.titleTopRight_1} </span>
                  {promo.titleTopRight_2}
                </h2>
                <div>{promo.subtitleTopRight}</div>
                <div className={styles.primary}>{promo.priceTopRight}</div>
              </div>
            </div>
            <div className={styles.bottomPictureWrapper}>
              <img src={promo.bed} alt='bed' />
              <div className={styles.containerBottomImgContent}>
                <div className={styles.primary}>
                  <span>{promo.titleBottomRight_1} </span>
                  {promo.titleBottomRight_2}
                </div>
                <div>{promo.subtitleBottomRight}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Promo.propTypes = {
  promo: PropTypes.object,
};

export default Promo;
