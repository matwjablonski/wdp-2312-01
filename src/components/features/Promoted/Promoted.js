import React from 'react';
import styles from './Promoted.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { getPromotedProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const Promoted = () => {
  const promotedCount = 3; //currently for the visual layout of the page only
  const promotedProducts = useSelector(getPromotedProducts); //currently for the visual layout of the page only

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
          <div className={`col-8`}></div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
