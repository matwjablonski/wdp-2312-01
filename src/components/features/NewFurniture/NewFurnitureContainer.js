import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getScr } from '../../../redux/scrszRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  screen: getScr(state),
});

export default connect(mapStateToProps)(NewFurniture);
