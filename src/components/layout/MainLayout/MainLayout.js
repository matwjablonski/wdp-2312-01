import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { setScr } from '../../../redux/scrszRedux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { MagicNumbers } from '../../../utils/constants';

const MainLayout = ({ children }) => {
  const [viewport, setViewport] = useState('');
  const [elements, setNumbersOfElements] = useState('');

  const dispatch = useDispatch();

  const setResponsiveView = () => {
    if (visualViewport.width > MagicNumbers.large) {
      setViewport('desktop');
      setNumbersOfElements(8);
    }
    if (
      visualViewport.width > MagicNumbers.medium &&
      window.innerWidth < MagicNumbers.large
    ) {
      setViewport('tablet');
      setNumbersOfElements(3);
    }
    if (visualViewport.width < MagicNumbers.small) {
      setViewport('mobile');
      setNumbersOfElements(2);
    }
  };

  useEffect(() => {
    setResponsiveView();
    dispatch(setScr({ viewport, elements }));
  }, [dispatch, viewport, elements]);

  visualViewport.onresize = () => {
    setResponsiveView();
  };

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
