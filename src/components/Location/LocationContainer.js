import { connect } from 'react-redux';
import Location from './Location';
import { bindActionCreators } from 'redux'
import { changeLatLong, changeLocationValue, makeLocationAjax, locationSelected } from './actions';

const mapStateToProps = (store) => {
  return {
    ...store.locationReducer
    // latitude: store.locationreducer.latitude
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeLatLong,
    changeLocationValue,
    makeLocationAjax,
    locationSelected
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)