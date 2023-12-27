import React from 'react';
import PropTypes from 'prop-types';
import { setScr } from '../../../redux/scrszRedux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const [viewport, setViewport] = useState('');
  const [elements, setElements] = useState('');

  const dispatch = useDispatch();

  const rwd = () => {
    if (visualViewport.width > 992) {
      setViewport('desktop');
      setElements(8);
    }
    if (visualViewport.width > 768 && window.innerWidth < 992) {
      setViewport('tablet');
      setElements(3);
    }
    if (visualViewport.width < 576) {
      setViewport('mobile');
      setElements(2);
    }
  };

  useEffect(() => {
    rwd();
    dispatch(setScr({ viewport, elements }));
  });

  visualViewport.onresize = () => {
    rwd();
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
