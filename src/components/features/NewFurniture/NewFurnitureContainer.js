import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getElements } from '../../../redux/elementsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  elements: getElements(state),
});

export default connect(mapStateToProps)(NewFurniture);
