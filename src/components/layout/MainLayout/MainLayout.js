import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { setElements } from '../../../redux/elementsRedux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';

const MainLayout = ({ children }) => {
  const [mode, setMode] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleResize = () => {
    if (visualViewport.width > 1024) {
      setMode('desktop');
      setContent(8);
    }
    if (visualViewport.width > 480 && window.innerWidth < 800) {
      setMode('tablet');
      setContent(2);
    } 
    if (visualViewport.width < 480) {
      setMode('mobile');
      setContent(1);
    }
  };

  useEffect(() => {
    handleResize(); 
    dispatch(setElements({mode, content}));
  });

  visualViewport.onresize = () => {
    handleResize();
  };

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
