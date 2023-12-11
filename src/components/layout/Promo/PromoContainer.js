import { connect } from 'react-redux';

import Promo from './Promo';
import { getPromoData } from '../../../redux/promoRedux';

const mapStateToProps = state => {
  return ({
    promo: getPromoData(state),
  });
};

export default connect(mapStateToProps)(Promo);

