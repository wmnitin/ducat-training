import { connect } from 'react-redux'
import Test from './Test'
import { buttonClicked } from './testaction';
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return { count: state.testReducer.count }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buttonClicked
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)