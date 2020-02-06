import { connect } from 'react-redux';
import Category from './Category';

import { makeCategoryRequest } from './actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (store) => {
  return { list: store.categoryReducer.list }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      makeCategoryRequest
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Category)