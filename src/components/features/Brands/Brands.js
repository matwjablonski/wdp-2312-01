import styles from './Brands.module.scss';
import React from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getAllBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux';

const Brands = () => {
  const allBrands = useSelector(getAllBrands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.brandsWrapper}>
          <div>
            <Button variant='outline' className={styles.brandButton}>
              <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
            </Button>
          </div>
          {allBrands.map(brand => (
            <div key={brand.id} className={styles.brand}>
              <div
                className={styles.photoBrand}
                style={{
                  backgroundImage: `url("${process.env.PUBLIC_URL}/images/brands/${brand.name}.jpg")`,
                }}
              ></div>
            </div>
          ))}
          <div>
            <Button variant='outline' className={styles.brandButton}>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
