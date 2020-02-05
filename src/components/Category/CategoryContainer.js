import { connect } from 'react-redux';
import Category from './Category';

import { makeCategoryRequest } from './actions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      makeCategoryRequest
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Category)