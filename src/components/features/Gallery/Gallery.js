import React from 'react';
import styles from './Gallery.module.scss';
import GalleryBox from '../../common/GalleryBox/GalleryBox';
import StaticImageRight from '../../common/GalleryBox/StaticImageRight/StaticImageRight';

const Gallery = () => {
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
            <StaticImageRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
