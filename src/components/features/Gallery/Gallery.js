import React from 'react';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import ProductBox from '../../common/ProductBox/ProductBox';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

const Gallery = () => {
  const allProducts = useSelector(getAll);

  // Załóżmy, że aktualnie wyświetlany produkt ma ID 'aenean-ru-bristique-2'
  const currentProductId = 'aenean-ru-bristique-2';

  // Funkcja, która zwraca ścieżkę do obrazka na podstawie ID produktu
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
            <div className={styles.menu}>
              <div className={styles.menuHeader}>
                <ul className={styles.navi}>
                  <li className={styles.navItem}>
                    <a className={styles.navLink} href='#'>
                      featured
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a className={styles.navLink} href='#'>
                      top sellers
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a className={styles.navLink} href='#'>
                      sale off
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a className={styles.navLink} href='#'>
                      top rated
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ProductBox inGallery={true} />
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
