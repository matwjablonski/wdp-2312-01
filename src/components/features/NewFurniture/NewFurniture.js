import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../Swipeable/Swipeable';
import StickyBar from '../StickyBar/StickyBar';

const NewFurniture = ({ categories, products }) => {
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  render() {
    const { categories, products, screen } = this.props;
    const { activeCategory, activePage } = this.state;
  const handleSwipeLeft = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  const handleSwipeRight = () => {
    const pagesCount = Math.ceil(categoryProducts.length / 8);
    let classRWD = screen.viewport === 'desktop' ? 'col-lg-3' : (screen.viewport === 'tablet' ? 'col-md-4' : 'col-sm-6');

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    if (activePage < pagesCount - 1) {
      setActivePage(activePage + 1);
    }
  };

  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / 8);

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : ''}
        >
          Page {i + 1}
        </a>
      </li>
    );
  }

  return (
    <Swipeable leftAction={handleSwipeLeft} rightAction={handleSwipeRight}>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {categoryProducts.slice(activePage * screen.elements, (activePage + 1) * 8).map(item => (
              <div key={item.id} className={classRWD}>
                <ProductBox {...item} isPromoted={false} />
              </div>
            ))}
          </div>
        </div>
        <StickyBar />
      </div>
    </Swipeable>
  );
};

NewFurniture.propTypes = {
  screen: PropTypes.array,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
