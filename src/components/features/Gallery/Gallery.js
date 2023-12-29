import React from 'react';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import ProductBox from '../../common/ProductBox/ProductBox';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import GalleryBox from '../../common/GalleryBox/GalleryBox';

const Gallery = () => {
  const allProducts = useSelector(getAll);

  const currentProductId = 'aenean-ru-bristique-2';

  const getImagePathById = productId => {
    return `${process.env.PUBLIC_URL}/images/products/${productId}.jpg`;
  };

  const currentProduct = allProducts.find(product => product.id === currentProductId);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.panelBar}>
              <div className={styles.heading}>
                <h3>Furniture Gallery</h3>
              </div>
            </div>
            <GalleryBox />
          </div>
          <div className='col-6'>
            <div className={styles.sliderWrapper}>
              <div
                className={styles.photo}
                style={{
                  backgroundImage: `url("${getImagePathById(currentProductId)}")`,
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
